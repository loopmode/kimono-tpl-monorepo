#!/bin/sh
<% if (publishRegistry && packageScope) { %>
registry=<%= publishRegistry %>
npm set <%= packageScope %>:registry $registry
npm adduser --registry $registry
<% } %>

yarn install
yarn build
