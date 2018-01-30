import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react';
import { links } from '../data';

const FixedMenu = () => (
    <Menu fixed='top' size='large'>
        <Container>
            <Menu.Item as='a' active>Menu Items Here</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item className='item'>
                    <Button as='a'>Log in</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as='a' primary>Sign Up</Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);

class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    hideFixedMenu = () => this.setState({visible: false});
    showFixedMenu = () => this.setState({visible: true});

    render(){

        const height = this.props.small ? 350 : 700;
        const buttonSize = this.props.small ? 'small' : 'huge';
        const headingStyle = this.props.small ? {fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em'}
                                        : {fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'};
        const subHeadingStyle = {fontSize: '1.7em', fontWeight: 'normal'};
        const menuStyle = this.props.bgColor == 'undefined' ? {} : {border: '0'};

        const visible = this.state.visible;
        const location = this.props.location.pathname;

        return(
            <div>
                {visible ? <FixedMenu/> : null}
                <Visibility onBottomPassed={this.showFixedMenu} onBottomVisible={this.hideFixedMenu} once={false}>
                    <Segment inverted textAlign='center' style={{minHeight: height, padding: '1em 0em'}} vertical color={this.props.bgColor}>
                        <Container>
                            <Menu inverted pointing secondary size='large' style={menuStyle}>
                                {links.map((n,i) => {
                                    return(
                                     n.link === location ? <Menu.Item as='a' href={n.link} key={i} active>{n.text}</Menu.Item>
                                         : <Menu.Item as='a' href={n.link} key={i}>{n.text}</Menu.Item>
                                    )
                                })}
                                {this.props.hasLogin ?
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted onClick={this.props.loginService}>Log in</Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                    </Menu.Item>
                                    : null
                                }
                            </Menu>
                        </Container>

                        <Container text>
                            <Header as='h1' content={this.props.title} inverted style={headingStyle} />
                            <Header as='h2' content={this.props.subheading} inverted style={subHeadingStyle} />
                            {!this.props.noBtn ? (
                                <Button primary size={buttonSize}>
                                    {this.props.btnText}
                                    <Icon name='right arrow' />
                                </Button>
                            ) : null}

                        </Container>
                    </Segment>
                 </Visibility>
            </div>
        )
    }
}

export default withRouter(Layout);