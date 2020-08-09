import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  overflow: hidden;
  border-radius: 6px;
  padding: 16px 16px 10px;
  border: 1px solid var(--border);

  .wrapper {
    max-width: 828px;
    width: 100%;

    .scale-0 {
      fill: var(--calendar-scale-0);
    }
    .scale-1 {
      fill: var(--calendar-scale-1);
    }
    .scale-2 {
      fill: var(--calendar-scale-2);
    }
    .scale-3 {
      fill: var(--calendar-scale-3);
    }
    .scale-4 {
      fill: var(--calendar-scale-4);
    }
  }

  span {
    font-size: 11px;
    color: var(--link);

    margin-left: 7px;
    padding-bottom: 16px;
    display: inline-flex;
    align-self: flex-start;
  }
`;
