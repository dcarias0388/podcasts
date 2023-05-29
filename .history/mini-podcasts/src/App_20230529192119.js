import React from 'react';

function App() {
  return (
    <div className="ui container">
        <PageHeader loading={this.state.loading} />
        <Route
          path="/"
          exact
          render={() => (
            <Home loading={this.state.loading} isLoading={this.loading} />
          )}
        />
        <Route
          path="/podcast/:podcastId"
          render={() => (
            <PodcastContainer
              loading={this.state.loading}
              isLoading={this.loading}
            />
          )}
        />
      </div>
  );
}

export default App;
