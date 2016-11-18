import React from "react"
import style from "../../css/default.scss"

import ConvertedMarkdown from "./markdown/ConvertedMarkdown"
import RawMarkdown from "./markdown/RawMarkdown"

export default class Layout extends React.Component {

    constructor() {
        super();

        this.state = {
            text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.*'
        }
    }

    changeHandler(val){
        this.setState({
            text: val
        });
    }


    render() {
        return (
            <div class="container">
                <h1 class="text-center header">Markdown Previewer</h1>
                <div class="row">
                    <div class="col-md-6 raw-text">
                        <RawMarkdown text={this.state.text} changeText={this.changeHandler.bind(this)}/>
                    </div>
                    <div class="col-md-6 marked-text">
                        <ConvertedMarkdown textToConvert={this.state.text}/>
                    </div>
                </div>
                <h1 class="text-center credits">Built By <a href="http://www.jaykch.com/" target="_blank">Jay Kumar</a></h1>
            </div>
        )
    }
}