import React from 'react';
import { H1,H2, Headline, Text, TextLink, Caption } from '../ui/typography';

export const Demo = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <H1>Пример заголовка H1</H1>
          <H2>Пример заголовка H2</H2>
          <Headline>Пример Headline</Headline>
          <Text>Пример Text</Text>
          <TextLink href="https://yandex.ru">Пример ссылки TextLink</TextLink>
          <Caption>Пример подписи</Caption>
        </div>
    );
}