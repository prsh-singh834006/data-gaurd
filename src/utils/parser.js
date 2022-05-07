export const parseTabsData = ({ tabs, tabdata, plugins }) => {
  return tabs
    .map((tab) => {
      if (tabdata[tab]) {
        const tabPlugins = [];

        for (const plugin in plugins) {
          if (tabdata[tab]?.active.includes(plugin)) {
            tabPlugins.push({
              id: plugin,
              title: plugins[plugin].title,
              description: plugins[plugin].description,
              type: "active",
            });
          }

          if (tabdata[tab]?.disabled.includes(plugin)) {
            tabPlugins.push({
              id: plugin,
              title: plugins[plugin].title,
              description: plugins[plugin].description,
              type: "disabled",
            });
          }

          if (tabdata[tab]?.inactive.includes(plugin)) {
            tabPlugins.push({
              id: plugin,
              title: plugins[plugin].title,
              description: plugins[plugin].description,
              type: "inactive",
            });
          }
        }

        return {
          id: tab,
          tabPlugins,
          ...tabdata[tab],
        };
      }

      return null;
    })
    .filter((tab) => tab !== null);
};
