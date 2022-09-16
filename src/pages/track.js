import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {Layout, QueryResult} from '../components';
import TrackDetail from '../components/track-detail';

const GET_TRACK = gql`
query GetTrack($trackId: ID!) {
  track(trackId: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    description
    numberOfViews
    modules {
      id
      title
      length
    }
  }
}
`


const Track = ({trackId})=>{
    const {loading,error,data} = useQuery(GET_TRACK,{
        variables:{trackId}
    })
    return <QueryResult loading={loading} error={error} data={data}>
        <Layout><TrackDetail track={data?.track}/></Layout>
    </QueryResult>
}

export default Track;