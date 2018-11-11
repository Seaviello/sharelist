import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styles from 'styled-components';

const GET_ALL_ITEMS = gql`
    query GET_ALL_ITEMS {
        tasks {
            title
            id
            createdAt
        }
    }
`;

const Tasks = ({}) => {
    return (
        <Query query={GET_ALL_ITEMS}>
            {({ data, loading, error }) => {
                if(loading) return <p>Loading ...</p>
                if(error) return <p>Error: {error.message}</p>
                return <ul>{data.tasks.map(({id, title, createdAt}) => <li key={id}><div>{title}</div></li>)}</ul>;
            }}
        </Query>
    );
};

Tasks.displayName = 'Tasks';

export default Tasks;
