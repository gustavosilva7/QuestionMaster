import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import api from '~/components/api/api';

import { FlashList } from '@shopify/flash-list';

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
      renderItem={({ item }: any) => <Text>{item.statement}</Text>}
      estimatedItemSize={200}
    />
  );
}
