import React, { Component } from 'react';


class EmojiList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, emoji: "😀", clicks: 0 },
        { id: 2, emoji: "😍", clicks: 0 },
        { id: 3, emoji: "😅", clicks: 0 },
        { id: 4, emoji: "😈", clicks: 0 },
      ],
      winningEmoji: null,
      showResults: false,
    };
  }

  handleEmojiClick = (emojiId) => {
    const updatedEmojis = this.state.emojis.map((emoji) => {
      if (emoji.id === emojiId) {
        return { ...emoji, clicks: emoji.clicks + 1 };
      }
      return emoji;
    });

    this.setState({ emojis: updatedEmojis });
  };

  handleShowResultsClick = () => {
    const winningEmoji = this.state.emojis.reduce((prev, current) => {
      return (prev.clicks > current.clicks) ? prev : current;
    });

    this.setState({ winningEmoji, showResults: true });
  };

  render() {
    return (
      <div>
        <h1>Emoji List</h1>
        <ul>
          {this.state.emojis.map((emoji) => (
            <li key={emoji.id}>
              <span role="img" aria-label="emoji" onClick={() => this.handleEmojiClick(emoji.id)}>
                {emoji.emoji}
              </span>
              <span>Clicks: {emoji.clicks}</span>
            </li>
          ))}
        </ul>
        <button onClick={this.handleShowResultsClick}>Show Results</button>
        {this.state.showResults && this.state.winningEmoji && (
          <div>
            <h2>Winning Emoji:</h2>
            <span role="img" aria-label="emoji">
              {this.state.winningEmoji.emoji}
            </span>
            <p>Clicks: {this.state.winningEmoji.clicks}</p>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiList;
