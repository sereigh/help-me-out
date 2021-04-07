exports.filterParams = (params) => ({
  tools: params[0].tools.map((item) => item.tool_name),
  projects: params[0].projects.map((item) => item.needed_tools).flat(),
  zip: params[0].zip,
});
