import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;

  padding: ${props => props.theme.spacing.step * 2}px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ textPosition }) => {
    if (textPosition) return 'flex-start';
    return 'center';
  }};

  align-items: center;

  width: 500px;
  padding: ${props => props.theme.spacing.step * 3}px;

  background: ${props => props.theme.colors.light};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.spacing.step * 2}px;
`;

export const Title = styled.h2`
  text-align: center;

  font-size: ${props => props.theme.fontSizes.xxl};
  color: ${props => props.theme.colors.primary};

  padding-top: ${props => props.theme.spacing.step * 5}px;
  margin-bottom: ${props => props.theme.spacing.step * 4}px;
`;

export const ContactTitle = styled.h3`
  text-align: center;

  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.step * 2}px;
`;

export const List = styled.ul`
  width: 95%;
  margin-top: ${props => props.theme.spacing.step * 4}px; ;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.step * 3}px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;

  color: ${props => props.theme.colors.primary};
`;
