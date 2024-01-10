import styled from 'styled-components';

export const CommentsWrapperDiv = styled.div`
  height: 300px;
`;
export const CommentBox = styled.div`
  width: 380px;
  height: 167px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(245, 242, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
`;

export const CommentBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const CommentWriterSpan = styled.span`
  color: black;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentContent = styled.span`
  color: #505050;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CommentHeaderDiv = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  border-radius: 100px;
`;

export const CommentFooterWrapDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 380px;
  height: 49px;
  flex-shrink: 0;
  border-radius: 4px 15px;
  background: #fff;
  margin-left: 5px;
  border: 3px solid rgba(245, 242, 255, 1);
`;

export const BlankDiv = styled.div`
  display: flex;
`;

export const InputBoxDiv = styled.input`
  background-color: white;
  width: 290px;
  height: 40px;
  margin-left: 10px;
  border: 0px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const BlankInput = styled.input`
  background-color: white;
  width: 380px;
  height: 47px;
  border-radius: 28px;
  & :active {
    border: 1px solid #391d93;
  }
`;

export const SubmitButton = styled.button`
  color: #fff;
  border-radius: 2px 10px;
  background: #8066d1;
  width: 73px;
  height: 40px;
  flex-shrink: 0;
  margin-top: 3px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #391d93;
  }
`;

export const CommentWriterBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentWrapperDiv = styled.div``;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const EditTextSpan = styled.span`
  color: #000;
  font-size: 13px;
  font-weight: 300;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: #391d93;
  }
  margin-right: 5px;
`;

export const DeleteTextSpan = styled.span`
  color: #000;
  text-align: right;
  font-size: 13px;
  font-weight: 300;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: #391d93;
  }
`;

export const DateBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoCommentBoxDiv = styled.div`
  width: 380px;
  height: 64.442px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(239, 170, 173, 0.7);
  background: rgba(245, 242, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const NoCommentSpan = styled.span`
  color: #aeaeae;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CommentSettingDiv = styled.div``;

export const CountCheckSpan = styled.span`
  margin-left: 20px;
`;
