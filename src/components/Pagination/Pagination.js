import React from 'react';
import { usePagination } from 'hooks';
import { Button } from 'components';
import { StyledPagination } from './Pagination.styled';

const Pagination = () => {
  const { goToPrevPage, goToNextPage } = usePagination();
  return (
    <StyledPagination>
      <Button action={goToPrevPage} description={'Prev Page'} />
      <Button action={goToNextPage} description={'Next Page'} />
    </StyledPagination>
  );
};

export default Pagination;
