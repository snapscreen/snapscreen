async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractCoverageEntries(fetchResponse) {
  return fetchResponse?.data?.pressCoverageCollection?.items
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.pressArticleCollection?.items
}

export async function getAllPressCoverage() {
  const entries = await fetchGraphQL(
    `query {
      pressCoverageCollection {
        items {
          title
          link
          image {
            url
          }
        }
      }
    }`
  )
  return extractCoverageEntries(entries)
}

export async function getAllPressArticles() {
  const entries = await fetchGraphQL(
    `query {
      pressArticleCollection {
        items {
          title
          publishDate
          shortText
          longText {
            json
          }
        }
      }
    }`
  )
  return extractArticleEntries(entries)
}
