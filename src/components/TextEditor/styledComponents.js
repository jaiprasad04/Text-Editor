import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #25262c;
  display: flex;
  justify-content: center;
`
export const ResponsiveContainer = styled.div`
  width: 90%;
  background-color: #1b1c22;
  margin-top: 96px;
  margin-bottom: 96px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 48px;
`

export const TextImage = styled.img`
  width: 400px;
  margin-bottom: 96px;
`
export const TextAreaContainer = styled.div`
  width: 50%;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 16px;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  color: #f8fafc;
  font-size: 18px;
  font-family: 'Roboto';
  background-color: transparent;
  padding: 20px;
  border: none;
  outline: none;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
export const TextButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
  padding-left: 0;
  list-style: none;
`

export const ListItem = styled.li``

export const Line = styled.hr`
  border: 1px solid #334155;
`

export const ButtonBold = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 16px;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`

export const ButtonItalic = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 16px;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`

export const ButtonUnderline = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 16px;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`
