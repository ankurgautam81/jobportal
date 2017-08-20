import React, {Component} from 'react';
 
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term : ''};
	}

	render() {
      return (
      	<div className="search-bar col-md-12" id="search_bar">
            <div className="col-md-8">
                <input className="inputSearch" id="inputSearch" value={this.state.term} onChange={event =>this.onInputChange(event.target.value)} placeholder="Search"/>

            </div>
            <div className="col-md-4">
               <input type="button" value="Search" id="searchButton"  className="searchButton" onClick={event =>this.onSearch()}/>      

            </div>
      	
          	 
      	</div>
      );
   };

   onInputChange(term){
      this.setState({term});
   }
   onSearch(){     
      this.props.onSearchTermChange(this.state.term);
   } 
};

export default SearchBar;