import React, {Component} from 'react';
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
)

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    hideFixedMenu = () => this.setState({visible: false});
    showFixedMenu = () => this.setState({visible: true});

    render(){
        const { visible } = this.state;

        return(
            <div>
                {visible ? <FixedMenu/> : null}
                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                >
                    <Segment inverted textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item as='a' active>Home</Menu.Item>
                                <Menu.Item as='a'>About</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>Log in</Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                </Menu.Item>
                            </Menu>
                        </Container>

                        <Container text>
                            <Header as='h1' content='Boilerplate Time' inverted style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}} />
                            <Header as='h2' content='Subheadings and everything!' inverted style={{fontSize: '1.7em', fontWeight: 'normal'}} />
                            <Button primary size='huge'>
                                Get Started
                                <Icon name='right arrow' />
                            </Button>
                        </Container>
                    </Segment>
                </Visibility>

                <Segment style={{padding: '8em 0em'}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em'}} > This would be a Section! </Header>
                                <p style={{fontSize: '1.33em'}}>
                                    This is where something awesome and some selling point would live! As it stands I
                                    have nothing of substance!
                                </p>
                                <Header as='h3' style={{ fontSize: '2em'}}> Project Zeus! </Header>
                                <p style={{fontSize: '1.33em'}}>
                                    You will not be informed of the meaning of Project Zeus until the time is right.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large'
                                       src='https://img.gifglobe.com/grabs/peepshow/S04E02/gif/YiN7b8BDnpvL.gif' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Button size='huge'>Now is the Time</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em'}} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                                <Header as='h3' style={{fontSize: '2em'}}> "Crash, Bang, Wallop! What a Video"</Header>
                                <p style={{ fontSize: '1.33em'}}>Look at what this idiot did. In America!</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em'}}>
                                <Header as='h3' style={{fontSize:'2em'}}> Welcome to Big School </Header>
                                <p style={{fontSize: '1.33em'}}>
                                    <Image avatar src='https://m0.joe.co.uk/wp-content/uploads/2017/07/26153851/06-partridge-bbc.jpg' />
                                    <b>Alan Partridge</b> King of Anglia
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{fontSize: '2em'}}>Breaking The Grid, A Digital Frontier</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            The Grid. A digital frontier. I tried to picture clusters of information as they moved
                            through the computer. What did they look like? Ships? motorcycles? Were the circuits like
                            freeways? I kept dreaming of a world I thought I'd never see. And then, one day...
                        </p>
                        <Button as='a' size='large'>I got in</Button>

                        <Divider as='h4' className='header' horizontal
                                 style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
                            <a href='#'>Case Studies</a>
                        </Divider>

                        <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
                            true.
                            It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
                        </p>
                        <Button as='a' size='large'>I'm Still Quite Interested</Button>
                    </Container>
                </Segment>

                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Footer Header</Header>
                                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default withRouter(Home);