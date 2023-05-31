import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 60%;
`;

export const TotalWrapper = styled.div`
    position: relative;
    display: flex;
    border: 1px solid #999999;
    border-top: none;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding-left: 1rem;
`;

export const TableContainer = styled(TotalWrapper)`
    margin-top: 20px;
    padding: 2rem 1rem;
`;

export const Table = styled.table`
    text-align: left;
    border-collapse: collapse;
    width: 95%;
    max-width: 750px;
    font-weight: 500;
    margin: 0 auto;
`;

export const TableHead = styled.thead`
    position: sticky;
    top: 0;
`;

export const ContainerScroll = styled.div`
  height:100vh;
  overflow: scroll;
  width: 100%;
`;

export const TableBody = styled.tbody`
`;

export const TableHeadCell = styled.th`
    border-bottom: 2px solid #999999;
    padding-bottom: 12px;
`;

export const TableRow = styled.tr`
 background-color: ${({ $color }) => $color? '#F5F5F5' : '#FFFFFF'};
`;

export const TableCell = styled.td`
    padding: 14px 0;
    border-bottom: #999999;
    max-width: 450px;
`;
