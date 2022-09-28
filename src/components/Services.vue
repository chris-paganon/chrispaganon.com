<template>
  <h2>What can I do for you?</h2>
  <p>
    I specialize in <strong>Wordpress Web Development</strong> but I can also help you with your marketing startegy!
  </p>
  <table class="services-wrapper">
    <thead>
      <tr>
        <th>
          <p class="icon">&#128640;</p>
          <p>New Website</p>
        </th>
        <th>
          <p class="icon">&#127942;</p>
          <p>Existing Website</p>
        </th>
        <th>
          <p class="icon">&#128202;</p>
          <p>Marketing Startegy</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul>
            <li>Get leads & customers</li>
            <li>Built on a strong base</li>
            <li>Best practices for Wordpress</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>New features</li>
            <li>Improve speed & SEO</li>
            <li>Complete overhaul</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Identifying key metrics</li>
            <li>Social Media strategy</li>
            <li>Paid media startegy</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  margin: 40px auto;
  max-width: 100%;
  border: 1px solid gray;
  border-radius: 15px;
  border-spacing: 0px;
}
th:not(:last-child), td:not(:last-child) {
  border-right: 1px solid gray;
}
th, td {
  padding: 20px;
}
th {
  font-size: 27px;
  width: 33%;
}
td {
  font-size: 19px;
}
li {
  margin: 10px 0;
}
.icon {
  font-size: 40px;
  margin-bottom: 20px;
}
</style>