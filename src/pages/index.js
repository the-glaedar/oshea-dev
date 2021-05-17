import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "/src/styles/page/index.module.scss";

// Components
import Layout from "../components/layout.js";
import Nav from "../components/nav.js";

export default function Index() {
  const query = useStaticQuery(graphql`
    {
      prismicHome {
        data {
          intro_tagline {
            text
          }
          body {
            primary {
              internal_link {
                link_type
              }
              service_text {
                text
              }
              service_title {
                text
              }
            }
          }
          intro {
            text
          }
          introimage {
            dimensions {
              width
              height
            }
            mobile {
              dimensions {
                height
                width
              }
            }
          }
          portfolio_tagline {
            text
          }
          portfolio_title {
            text
          }
          services_tagline {
            text
          }
        }
      }
    }
  `)["prismicHome"]["data"];

  return (
    <Layout>
      <section className={styles.intro}>
        <pre>{query.intro[0].text}</pre>
        <h1>{query.intro_tagline[0].text}</h1>
      </section>
    </Layout>
  );
}
