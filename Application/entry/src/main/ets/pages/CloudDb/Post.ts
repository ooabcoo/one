import { cloudDatabase } from '@kit.CloudFoundationKit';

class Post extends cloudDatabase.DatabaseObject {
  id: number;
  userId = '';
  content = '';
  name: string;
  profilePicture: string;
  insertDate: Date;
  likes = '[]';
  likeCount = 0;

  naturalbase_ClassName(): string {
    return 'Post';
  }
}

export { Post };