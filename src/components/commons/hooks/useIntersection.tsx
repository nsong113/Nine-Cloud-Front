// import { Fragment } from 'react';
// import { useInfiniteQuery } from 'react-query';
// import axios from 'axios';
// import { getInfiniteDiaries } from 'src/apis/diary';

// // const fetchProducts = (page) => {
// //   return axios.get(
// //     `https://mypocketbase.fly.dev/api/collections/products/records/?perPage=4&page=${page}`,
// //   )
// // }

// export const PaginatedQuery = () => {
//   const {
//     data,
//     isLoading,
//     isFetching,
//     hasNextPage,
//     fetchNextPage,
//     isFetchingNextPage,
//   } = useInfiniteQuery(
//     ['getDiary'],
//     ({ pageParam = 1 }) => getInfiniteDiaries(pageParam),
//     {
//       getNextPageParam: (_lastPage, pages) => {
//         //총 페이지 수
//         if (pages.length < 3) {
//           return pages.length + 1;
//         } else return undefined;
//       },
//     }
//   );
//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <>
//       <div className='text-4xl'>ReactQuery</div>

//       {data &&
//         data.pages?.map((group, i) => (
//           <Fragment key={i}>
//             {group &&
//               group?.data.items.map((p) => <div key={p.id}>{p.name}</div>)}
//           </Fragment>
//         ))}
//       <div className='space-x-4'>
//         <button
//           className='border'
//           onClick={fetchNextPage}
//           disabled={!hasNextPage}
//         >
//           Load More
//         </button>
//       </div>
//       <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
//     </>
//   );
// };
