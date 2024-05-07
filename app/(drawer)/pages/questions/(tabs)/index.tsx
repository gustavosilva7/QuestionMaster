import React, { useEffect, useState } from 'react';
import api from '~/components/api/api';

import { FlashList } from '@shopify/flash-list';
import { Span } from '~/components/Text';

export default function index() {
  const [questions, setQuestions] = useState([] as any);

  const fetchQuestions = async () => {
    try {
      const response = await api.get('/questions');

      setQuestions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <FlashList
      data={questions}
      renderItem={({ item }: any) => <Span>{item.statement}</Span>}
      estimatedItemSize={200}
    />
  );
}
