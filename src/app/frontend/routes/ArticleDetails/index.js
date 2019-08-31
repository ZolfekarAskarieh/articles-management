import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Container from '@material-ui/core/Container';
import {stateToHTML} from 'draft-js-export-html';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import {withStyles} from '@material-ui/core/styles'
import {getArticle} from '../../../../services/articles';

const styles = theme => ({
    img: {
      maxWidth: '100%',
    },
});

class ArticleDetails extends React.Component {
    state = {
        article: {}
    }
    componentDidMount() {
        const {id} = this.props.match.params
        const article = getArticle(id);
        if(article) {
            const editorStateContent = convertFromRaw(article.content);
            this.setState ({
                article,
                title: article.title,
                date: article.date,
                image: article.image,
                editorState: EditorState.createWithContent(editorStateContent),
                contentHtml: stateToHTML(editorStateContent),
            })
        }
        this.setState({
            loading:false
        })
    }
    render() {
        const {article, editorState} = this.state;
        const {classes} = this.props;
        
        return (
            article && <main>
                {/* Hero unit */}
                <Container >
                    <h1>Title: {article.title} </h1>
                    <h2 >Date: {article.date}</h2>
                </Container>
                <Container >
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <img className={classes.img} src={article.image} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h3>Content</h3>
                            {ReactHtmlParser(this.state.contentHtml)}
                        </Grid>
                    </Grid>
                    
                </Container>
            </main>
        );
    }
}

const mapStateToProps = ({articlesReducer}) => {
    return {articles: articlesReducer.articles}
}
export default withStyles(styles)(connect(mapStateToProps)(ArticleDetails));