import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  ResponsiveContainer,
  TextContainer,
  Heading,
  TextImage,
  TextAreaContainer,
  TextArea,
  TextButtonsContainer,
  ListItem,
  ButtonBold,
  ButtonItalic,
  ButtonUnderline,
  Line,
} from './styledComponents'

class TextEditor extends Component {
  state = {textInput: '', bold: false, italic: false, underline: false}

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {textInput, bold, italic, underline} = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <TextContainer>
            <Heading>Text Editor</Heading>
            <TextImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextContainer>
          <TextAreaContainer>
            <TextButtonsContainer>
              <ListItem>
                <ButtonBold
                  data-testid="bold"
                  onClick={this.onClickBold}
                  bold={bold}
                >
                  <VscBold size={25} />
                </ButtonBold>
              </ListItem>
              <ListItem>
                <ButtonItalic
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  italic={italic}
                >
                  <GoItalic size={25} />
                </ButtonItalic>
              </ListItem>
              <ListItem>
                <ButtonUnderline
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  underline={underline}
                >
                  <AiOutlineUnderline size={25} />
                </ButtonUnderline>
              </ListItem>
            </TextButtonsContainer>
            <Line />
            <TextArea
              type="text"
              value={textInput}
              placeholder="Write something here..."
              onChange={this.onChangeInput}
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </TextAreaContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
