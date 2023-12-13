import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

format('YYYY-MM-DD', 'ko');
register('ko', koLocale);

export function VideoCard(publishedAt: string) {
  return <p className='text-sm opacity-80'>{format(publishedAt, 'ko')}</p>;
}
