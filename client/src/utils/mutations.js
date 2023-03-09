import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($username: String!, $email: String!, $password: String!) {
        loginUser(_id: $_id, username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(_id: $_id, username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: String!, $description: String!, $bookId: INT!, $title: String!) {
        saveBook(authors: $authors, description: $description, bookId: $bookId, title: $title) {
            authors
            description
            bookId
            title
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($authors: String!, $description: String!, $bookId: INT!, $title: String!) {
        removeBook(authors: $authors, description: $description, bookId: $bookId, title: $title) {
            authors
            description
            bookId
            title
        }
    }
`