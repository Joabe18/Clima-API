import styled from 'styled-components';

export const Container = styled.div`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,107,184,1) 0%, rgba(0,212,255,1) 100%);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 550px;
  border-radius: 10px;
  justify-content: space-between;
  padding: 40px;
  margin-top: 40px;
  border: 1px solid #fff;

  @media (max-width: 375px) {
  width: 300px;
  padding: 20px 10px;
  }


`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  h4{
    color: #fff#;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 375px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const Info = styled.div`
.info-item{
  display: flex;
  align-items: center;
  padding: 10px 10px;
}
.info-item p{
  padding: 0 10px;
  font-size: 14px;
}
@media (max-width: 375px) {
    .info-item{
    }
  }

h6{
  text-aling:center;
}
`;



export const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 80px;
    font-weight: 300;
  }
`;