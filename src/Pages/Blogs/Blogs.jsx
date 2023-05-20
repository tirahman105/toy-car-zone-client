const Blogs = () => {
    window.scrollTo(0,0);
  return (
    
    <div >
      <div
        className="hero h-60"
        style={{
          backgroundImage: `url("https://t4.ftcdn.net/jpg/02/21/79/41/360_F_221794176_WGP6wn7l2otpSlNorXDYnE4Iqu4z3rJP.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Blog page</h1>
           
            
          </div>
        </div>
      </div>
     
  <div className="max-w-7xl mx-auto">
  <div className="divider"></div>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">
          What is an Access Token and Refresh Token?
        </h1>
        <img
          className="w-full md:w-3/4 mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGfHniTz8rOfCP1vbJKfe1PBzC1NCCUUXyA&usqp=CAU"
          alt=""
        />
        <p className="mb-4">
          Access tokens and refresh tokens are commonly used in authentication
          systems to verify the identity and permissions of a client accessing
          protected resources. An access token is a credential that is issued by
          an authentication server upon successful authentication. It contains
          information about the user and their granted permissions. Access
          tokens are typically short-lived and have an expiration time. The
          client includes the access token in the headers of API requests to
          prove its identity and access protected resources.
        </p>
        <p className="mb-4">
          A refresh token is a long-lived token that is also issued by the
          authentication server. It is used to obtain a new access token when
          the current one expires. The client securely stores the refresh token
          and uses it to make a request to the authentication server to obtain a
          new access token. This process is usually done behind the scenes
          without involving the user.
        </p>
        <p className="mb-4">
          To store access tokens on the client-side, they can be stored in
          memory or in a browser's local storage. However, storing sensitive
          tokens like access tokens in local storage can make them vulnerable to
          cross-site scripting (XSS) attacks. It is generally recommended to
          store access tokens in memory or use other secure storage mechanisms
          provided by the platform or framework being used.
        </p>
        <p className="mb-4">
          Refresh tokens should be stored securely on the client-side. One
          common approach is to store the refresh token in an HTTP-only cookie,
          which provides better protection against cross-site scripting attacks.
          The cookie can be sent automatically by the browser in subsequent
          requests to the authentication server for obtaining new access tokens.
        </p>
        <p className="mb-4">
          It's important to note that the specific storage mechanism for access
          and refresh tokens may vary depending on the authentication system and
          the security requirements of the application. It is recommended to
          follow best practices and security guidelines provided by the
          authentication framework or library being used.
        </p>
      </div>
      <div className="divider mt-4"></div>
      <div>
        <div className="p-4">
          <h1 className="text-3xl mb-4">Compare SQL and NoSQL databases?</h1>
          <img
            className="w-full md:w-3/4 mx-auto"
            src="https://tomaztsql.files.wordpress.com/2022/02/screenshot-2022-02-13-at-20.38.39.png?w=1024"
            alt=""
          />
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">SQL Databases</th>
                <th className="px-4 py-2">NoSQL Databases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  Structure: Relational databases with predefined schemas and
                  tables.
                </td>
                <td className="border px-4 py-2">
                  Structure: Non-relational databases that provide flexibility
                  in data storage and retrieval.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Data Model: Data is organized into structured tables with rows
                  and columns.
                </td>
                <td className="border px-4 py-2">
                  Data Model: Various data models, such as key-value, document,
                  columnar, and graph, are used.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Query Language: SQL (Structured Query Language) is used to
                  retrieve and manipulate data.
                </td>
                <td className="border px-4 py-2">
                  Query Language: Querying methods vary depending on the
                  database type, such as key-based lookups, document queries, or
                  graph traversals.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Scalability: Vertical scalability is common, where increasing
                  performance is achieved by upgrading hardware resources.
                </td>
                <td className="border px-4 py-2">
                  Scalability: Horizontal scalability is a common feature, where
                  data is distributed across multiple nodes to handle large
                  amounts of traffic and data.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Transactions: ACID (Atomicity, Consistency, Isolation,
                  Durability) properties are ensured, allowing for reliable and
                  consistent data operations.
                </td>
                <td className="border px-4 py-2">
                  Transactions: Not all NoSQL databases support full ACID
                  transactions; instead, they often prioritize scalability and
                  performance over strict consistency.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Joins: Support for complex joins between tables.
                </td>
                <td className="border px-4 py-2">
                  Joins: NoSQL databases may not support complex joins as in SQL
                  databases. Data denormalization is often used to optimize
                  queries.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Data Integrity: Referential integrity constraints can be
                  enforced to maintain data integrity.
                </td>
                <td className="border px-4 py-2">
                  Data Integrity: NoSQL databases offer flexible schemas,
                  allowing for schema-less or dynamic schema models.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  Examples: MySQL, PostgreSQL, Oracle.
                </td>
                <td className="border px-4 py-2">
                  Examples: MongoDB (document database), Cassandra (columnar
                  database), Redis (key-value store), Neo4j (graph database).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="divider mt-4"></div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Framework Comparison</h2>
        <img
          className="w-full  mx-auto"
          src="https://www.linearloop.io/wp-content/uploads/2022/08/LL_Bb_Express-vs-Nest.js-1425x524.jpg"
          alt=""
        />
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4">NestJS</th>
              <th className="p-4">Express.js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border border-gray-200">
                Progressive Node.js framework for building efficient, scalable,
                and maintainable server-side applications.
              </td>
              <td className="p-4 border border-gray-200">
                Minimalistic and flexible web application framework for Node.js.
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-200">
                Offers a modular and structured approach to building Node.js
                applications.
              </td>
              <td className="p-4 border border-gray-200">
                Provides a robust set of features for building web applications
                and APIs.
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-200">
                Utilizes decorators, dependency injection, modules, and other
                powerful features.
              </td>
              <td className="p-4 border border-gray-200">
                Allows developers to handle routing, manage HTTP requests and
                responses, and implement various functionalities required for
                web development.
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-200">
                Inspired by Angular and follows a similar architectural style.
              </td>
              <td className="p-4 border border-gray-200">
                Known for its simplicity, flexibility, and wide adoption in the
                Node.js ecosystem.
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-200">
                Supports modern JavaScript/TypeScript features and design
                principles.
              </td>
              <td className="p-4 border border-gray-200">
                Written in JavaScript and supports middleware for additional
                functionality.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="divider mt-4"></div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">MongoDB Aggregate</h2>
        <img
          className="w-full md:w-3/4 mx-auto"
          src="https://studio3t.com/wp-content/uploads/2018/10/Mongodb.png"
          alt=""
        />
        <p className="mb-4">
          The <strong>aggregate</strong> function in MongoDB is a powerful tool
          for data aggregation and processing. It allows you to perform advanced
          data transformations and analysis on MongoDB collections using a
          pipeline-based approach.
        </p>
        <p className="mb-4">
          The aggregate function takes an array of stages as its input, where
          each stage performs a specific operation on the data. These stages can
          include various operations like filtering, grouping, sorting, joining,
          and applying mathematical functions.
        </p>
        <p className="mb-4">
          Each stage in the pipeline processes the input data and passes the
          results to the next stage. This allows you to build complex data
          processing workflows and perform multiple operations in sequence.
        </p>
        <p className="mb-4">
          Some common stages used in the aggregate pipeline include:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Match: Filters documents based on specified conditions.</li>
          <li>
            Group: Groups documents by a specified key and applies aggregation
            functions.
          </li>
          <li>
            Sort: Sorts the resulting documents based on specified criteria.
          </li>
          <li>
            Project: Selects specific fields to include in the output documents.
          </li>
          <li>Lookup: Performs a left outer join with another collection.</li>
          <li>Unwind: Deconstructs an array field into separate documents.</li>
        </ul>
        <p className="mb-4">
          The aggregate function allows you to perform complex data
          manipulations and aggregations that are not easily achievable with
          simple queries. It provides a powerful mechanism for data analysis and
          reporting in MongoDB.
        </p>
      </div>
  </div>
    </div>
  );
};

export default Blogs;
