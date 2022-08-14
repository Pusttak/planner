import { useState, useEffect, useMemo } from 'react';
import { fetchInspiration } from 'services/API';
import { Box, Inspiration, Author } from './Title.styled';

const Title = () => {
  const [inspiration, setInspiration] = useState(null);

  useEffect(() => {
    fetchInspiration().then(setInspiration);
  }, []);

  const title = useMemo(
    () => inspiration?.quote.replaceAll('.', '.\n'),
    [inspiration]
  );

  return (
    inspiration && (
      <Box>
        <Inspiration>❝ {title} ❞</Inspiration>
        <Author>— {inspiration.author}</Author>
      </Box>
    )
  );
};

export default Title;
