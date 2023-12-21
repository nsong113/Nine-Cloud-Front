import axios from 'axios';
import { Iprops } from './apiesType';

export const CallGPT = async ({
  countAverage,
  contents,
  temperature,
  humid,
  weather,
  sleep,
}: {
  countAverage: number;
  contents: string;
  temperature: string;
  humid: string;
  weather: string;
  sleep: string;
}) => {
  try {
    const messages = [
      {
        role: 'system',
        content:
          'You are a psychological advisor from now on. Proceed in the following order.',
      },
      {
        role: 'user',
        content: ` 1. the title of today after understanding the [events] separated by "" at the [title]: Think of bottom.
  
      2. [actionTips]: Write down 2 action tips that will be helpful in the future customer situation. The two action tips must be converted into JSON Array format. do not give me any example. you must reply in the same context from [contents] in each action tip. 
    
      translate into Korean and Use the output in the following JSON format:
      {
      title: here is [title],
      actionTips: here is [actionTips]
      }`,
      },
      {
        role: 'user',
        content: `
      ""
      내 감정은 오늘 ${temperature}. 그리고 내 마음의 컨디션은 ${humid}. 오늘의 날씨는 ${weather}. 오늘 나의 수면은 ${sleep}. 이런 날, 이런 기분에는 뭘 하는게 좋을까? 어떻게 하면 기분이 좀 더 좋아질까? 나의 오늘 일기는...  ${contents}.
      ""
      `,
      },
    ];

    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        max_tokens: 1000,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
        },
      }
    );

    const responseData = await res.data;
    console.log('responseData', responseData);

    const message = responseData.choices[0].message.content;
    console.log('message', message);

    return message;
  } catch (error) {
    console.log('CallGPT error', error);
  }
};
