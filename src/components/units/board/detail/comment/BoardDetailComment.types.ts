export interface IComment {
  profile: any;
  comment: any;
  detailedContent: any;
}

export interface ICommentMap {
  DiaryId : number,
  User : {
    profileImg : string,
    username : string
  },
  UserId : number,
  commentId : number,
  content : string,
  createdAt : string,
  isEdited : boolean,
  updatedAt : string | null
  deletedAt : string | null
}
