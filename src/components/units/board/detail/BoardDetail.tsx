import { useEffect, useState } from 'react';
import * as S from './BoardDetail.styles';
import useCalendar from 'src/components/commons/hooks/useCalender';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import * as DOMPurify from 'dompurify';

import {
  getComments,
  getHearts,
  getMyInfo,
  getOnePostInfo,
} from 'src/apis/cheolmin-api/apis';
import BoardDetailComment from './comment/BoardDetailComment';
import Animation3 from 'src/components/commons/utills/Animation/Animation3';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';
import Loading from 'src/components/commons/utills/loading/Loading';
import { CommentData } from './comment/test';
import EditPostOverlay from 'src/components/commons/modals/editPost/EditPostOverlay';
import getEmotion from 'src/components/commons/utills/emotionImage';
import useSliderCounts from 'src/components/commons/hooks/useSliderCounts';
import { Tooltip } from 'src/components/commons/utills/tooltip/tooltip';

const BoardDetail = () => {
  const queryClient = useQueryClient();

  const { currentDate, currentMonth } = useCalendar();
  const [isEdit, setIsEdit] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isHeart, setIsHeart] = useState(false);

  const onClickPencilImg = () => {
    setIsActiveModal((prev) => !prev);
  };
  const { data: comment } = useQuery('comment', () => getComments(params.id));
  const { data: profile } = useQuery('profile', getMyInfo);
  const { data, isLoading } = useQuery(['post'], () =>
    getOnePostInfo(params.id)
  );
  const profileInfo = profile?.data;
  const detailedContent = data?.data;
  const { temperatureHandle, humidHandle, sleepHandle } =
    useSliderCounts(detailedContent);
  const params = useParams();
  const heartMutation = useMutation(getHearts, {
    onSuccess: () => {
      queryClient.invalidateQueries('post');
      setIsHeart((prev) => !prev);
    },
  });

  console.log('id', params.id);

  console.log('detailedContent', detailedContent?.likeExist);

  useEffect(() => {
    if (detailedContent?.likeExist === true) {
      setIsHeart(true);
    } else {
      setIsHeart(false);
    }

    console.log('isHeart', isHeart);
  }, [detailedContent?.likeExist]);

  // const [countAverage, setCountAverage] = useState(0);

  const heartCount = heartMutation?.data;
  // useEffect(() => {
  //   setCountAverage(
  //     Number(data?.data?.temperature) + Number(data?.data?.humid) / 2
  //   );
  // }, []);

  const countAverage =
    (Number(data?.data?.temperature) + Number(data?.data?.humid)) / 2;

  const onClickHeart = () => {
    heartMutation.mutate(id);
  };

  console.log('detailedContent', detailedContent);

  if (isLoading) {
    return <Loading />;
  }

  const onClickMoveToMain = () => {
    navigate('/main');
  };
  const date = new Date(currentDate);

  const onClickToggle = () => {
    setIsActive((prev) => !prev);
  };

  const createdAtDate = detailedContent?.createdAt
    ? new Date(detailedContent.createdAt)
    : null;

  if (createdAtDate) {
    createdAtDate.setHours(createdAtDate.getHours() - 9);
  }

  const formattedDate = createdAtDate
    ? createdAtDate.toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  const id = params.id;

  return (
    <S.ContainerDiv>
      {isActiveModal && (
        <EditPostOverlay
          content={detailedContent?.content}
          onClose={onClickPencilImg}
          detailedContent={detailedContent}
          setIsEdit={setIsEdit}
        />
      )}

      <div key={data?.id}>
        <Animation3>
          <S.HeaderWrapperDiv>
            <S.HeaderLeftBoxDiv>
              <S.BackImg onClick={onClickMoveToMain} />
              <S.TitleTextSpan>{formattedDate}</S.TitleTextSpan>
            </S.HeaderLeftBoxDiv>
            <S.HearderRightBoxDiv>
              <Tooltip message='공개'>
                {detailedContent?.isPublic === true && (
                  <S.PublicPrivateImg src='/people.png' alt='공개' />
                )}
              </Tooltip>
              <Tooltip message='비공개'>
                {detailedContent?.isPublic === false && (
                  <S.PublicPrivateImg src='/person.png' alt='비공개' />
                )}
              </Tooltip>
            </S.HearderRightBoxDiv>
          </S.HeaderWrapperDiv>
          <S.ImgBoxDiv>
            <S.MainImg src={detailedContent?.image} alt='엑박' />
          </S.ImgBoxDiv>
        </Animation3>
        <Animation2>
          <S.ContentsWrapperDiv>
            <S.ContentsHeaderDiv>
              <S.CloudImg
                src={getEmotion(countAverage, data?.data?.weather)}
                alt='구름'
              />
              <S.ConentsHeaderRightDiv>
                <S.heartBoxDiv>
                  <div>
                    <S.CategoryText>마음 온도</S.CategoryText>
                    <S.StatusBoxDiv>
                      <S.MindStatusSpan>{temperatureHandle()}</S.MindStatusSpan>
                    </S.StatusBoxDiv>
                  </div>
                  <div>
                    <S.CategoryText>마음 습도</S.CategoryText>
                    <S.StatusBoxDiv>
                      <S.MindStatusSpan>{humidHandle()}</S.MindStatusSpan>
                    </S.StatusBoxDiv>
                  </div>
                  <div>
                    <S.CategoryText>마음 일출</S.CategoryText>
                    <S.StatusBoxDiv>
                      <S.MindStatusSpan>{sleepHandle()}</S.MindStatusSpan>
                    </S.StatusBoxDiv>
                  </div>
                </S.heartBoxDiv>
              </S.ConentsHeaderRightDiv>
            </S.ContentsHeaderDiv>
            <div>
              <S.ContentBoxHeaderDiv>
                <div></div>
              </S.ContentBoxHeaderDiv>
              <S.ContentsBoxDiv>
                <S.PencilsBoxDiv>
                  <S.PencilImg
                    src='/pencil.png'
                    alt='수정버튼'
                    onClick={onClickPencilImg}
                  />
                </S.PencilsBoxDiv>
                <S.ContentBoxDiv>
                  <S.ContentSpan
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        String(detailedContent?.content)
                      ),
                    }}
                  ></S.ContentSpan>
                </S.ContentBoxDiv>
              </S.ContentsBoxDiv>
              <S.ContentsFooterDiv>
                <S.SentenceSpan>{detailedContent?.sentence}</S.SentenceSpan>
              </S.ContentsFooterDiv>
            </div>
            <div>
              <S.CategoryBoxDiv>
                <S.FooterBoxDiv>
                  {detailedContent.isPublic === true && (
                    <div>
                      {isActive && <S.ToggleOnImg onClick={onClickToggle} />}
                      {!isActive && <S.ToggleOffImg onClick={onClickToggle} />}
                    </div>
                  )}
                  {detailedContent.isPublic === false && (
                    <div>
                      {!isActive && <S.GrayToggleImg onClick={onClickToggle} />}
                      {isActive && (
                        <S.GrayToggleOffImg onClick={onClickToggle} />
                      )}
                    </div>
                  )}
                  <S.CommentsBoxDiv>
                    {detailedContent.isPublic === true && (
                      <S.ChatBoxDiv>
                        <S.PurpleChatImg
                          src='/chat_purple.png'
                          alt='보라색말풍선'
                        />
                        <S.HeartCommentTextSpan
                          public={detailedContent.isPublic}
                        >
                          댓글
                        </S.HeartCommentTextSpan>
                        <S.HeartCommentTextSpan
                          public={detailedContent.isPublic}
                        >
                          {comment?.data?.length}
                        </S.HeartCommentTextSpan>
                      </S.ChatBoxDiv>
                    )}
                    {detailedContent.isPublic === false && (
                      <S.ChatBoxDiv>
                        <S.GrayChatImg src='/chat_gray.png' alt='회색말풍선' />
                        <S.HeartCommentTextSpan
                          public={detailedContent.isPublic}
                        >
                          댓글
                        </S.HeartCommentTextSpan>
                        <S.HeartCommentTextSpan
                          public={detailedContent.isPublic}
                        >
                          {comment?.data?.length}
                        </S.HeartCommentTextSpan>
                      </S.ChatBoxDiv>
                    )}
                  </S.CommentsBoxDiv>
                  <S.HeartBoxDiv>
                    <div>
                      {detailedContent.isPublic === true && (
                        <S.ChatBoxDiv>
                          <S.HeartWrapperDiv>
                            {isHeart && (
                              <S.CommentHeartImg onClick={onClickHeart} />
                            )}
                            {!isHeart && (
                              <S.BlankHeartImg onClick={onClickHeart} />
                            )}
                            <S.HeartCommentTextSpan
                              public={detailedContent.isPublic}
                            >
                              좋아요
                            </S.HeartCommentTextSpan>
                            <S.PurpleHeartCountSpan>
                              {detailedContent.likeCount}
                            </S.PurpleHeartCountSpan>
                          </S.HeartWrapperDiv>
                        </S.ChatBoxDiv>
                      )}
                      {detailedContent.isPublic === false && (
                        <S.HeartWrapperDiv>
                          <img src='/grayHeart.png' alt='회색하트' />
                          <S.HeartCommentTextSpan
                            public={detailedContent.isPublic}
                          >
                            좋아요
                          </S.HeartCommentTextSpan>
                          <S.GrayHeartCountSpan>
                            {detailedContent.likeCount}
                          </S.GrayHeartCountSpan>
                        </S.HeartWrapperDiv>
                      )}
                    </div>
                  </S.HeartBoxDiv>
                </S.FooterBoxDiv>
              </S.CategoryBoxDiv>
              {/* comment 영역 => BoardDetailComment (따로 분리시킴) */}
              {detailedContent.isPublic === true && (
                <Animation3>
                  {isActive && (
                    <BoardDetailComment
                      detailedContent={detailedContent}
                      profile={profile}
                      comment={comment}
                    />
                  )}
                </Animation3>
              )}
              {!isActive && (
                <div>
                  {detailedContent.isPublic === false && (
                    <div>
                      {comment?.data?.length === 0 && (
                        <S.NoCommentBoxDiv>
                          <S.NoCommentSpan>
                            전체공개로 전환해 사람들과 일기를 공유해보세요!
                          </S.NoCommentSpan>
                        </S.NoCommentBoxDiv>
                      )}
                      {comment?.data?.length !== 0 && (
                        <S.CommentsWrapperDiv>
                          <S.CommentBox>
                            <S.CommentHeaderDiv>
                              {comment?.data?.map((el: any) => (
                                <S.CommentWrapperDiv key={el.commentId}>
                                  <S.CommentBoxDiv>
                                    <S.ProfileImg
                                      src={profile.data.profileImg}
                                      alt='타원'
                                    />
                                    <S.CommentWriterBoxDiv>
                                      <S.CommentWriterSpan>
                                        {profileInfo?.username}
                                      </S.CommentWriterSpan>
                                      <S.CommentContent>
                                        {el.content}
                                      </S.CommentContent>
                                    </S.CommentWriterBoxDiv>
                                  </S.CommentBoxDiv>
                                </S.CommentWrapperDiv>
                              ))}
                            </S.CommentHeaderDiv>
                          </S.CommentBox>
                          <S.CommentFooterWrapDiv>
                            <S.InputBoxDiv
                              placeholder='공개로 바꾸면 친구들이 댓글을 달 수 있습니다.'
                              disabled
                            />
                          </S.CommentFooterWrapDiv>
                        </S.CommentsWrapperDiv>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </S.ContentsWrapperDiv>
        </Animation2>
      </div>
    </S.ContainerDiv>
  );
};

export default BoardDetail;
