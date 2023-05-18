(function(React2, react) {
  "use strict";
  react.createRemoteReactComponent("Alert");
  const Button = react.createRemoteReactComponent("Button");
  react.createRemoteReactComponent("ButtonRow");
  react.createRemoteReactComponent("Card");
  const DescriptionList = react.createRemoteReactComponent("DescriptionList");
  const DescriptionListItem = react.createRemoteReactComponent("DescriptionListItem");
  react.createRemoteReactComponent("Divider");
  react.createRemoteReactComponent("EmptyState");
  react.createRemoteReactComponent("ErrorState");
  react.createRemoteReactComponent("Form");
  react.createRemoteReactComponent("Heading");
  react.createRemoteReactComponent("Image");
  const Input = react.createRemoteReactComponent("Input");
  react.createRemoteReactComponent("Textarea");
  const LoadingSpinner = react.createRemoteReactComponent("LoadingSpinner");
  react.createRemoteReactComponent("ProgressBar");
  react.createRemoteReactComponent("Select");
  react.createRemoteReactComponent("Tag");
  react.createRemoteReactComponent("Text");
  react.createRemoteReactComponent("Tile");
  const Stack = react.createRemoteReactComponent("Stack");
  react.createRemoteReactComponent("StatisticsItem");
  react.createRemoteReactComponent("Statistics");
  react.createRemoteReactComponent("StatisticsTrend");
  react.createRemoteReactComponent("Table");
  react.createRemoteReactComponent("TableFooter");
  react.createRemoteReactComponent("TableCell");
  react.createRemoteReactComponent("TableRow");
  react.createRemoteReactComponent("TableBody");
  react.createRemoteReactComponent("TableHeader");
  react.createRemoteReactComponent("TableHead");
  const Link = react.createRemoteReactComponent("Link");
  const hubspot = {
    extend: render
  };
  const extend = (...args) => self.extend(...args);
  function render(renderCallback) {
    return extend((root, api) => {
      const renderCallbackResult = renderCallback(api);
      if (!React2.isValidElement(renderCallbackResult)) {
        throw new Error(`[hubspot.extend]: Expected callback function to return a valid element, got: ${renderCallbackResult}`);
      }
      react.createRoot(root).render(renderCallbackResult);
      root.mount();
    });
  }
  var ServerlessExecutionStatus;
  (function(ServerlessExecutionStatus2) {
    ServerlessExecutionStatus2["Success"] = "SUCCESS";
    ServerlessExecutionStatus2["Error"] = "ERROR";
  })(ServerlessExecutionStatus || (ServerlessExecutionStatus = {}));
  hubspot.extend(({ context, runServerlessFunction }) => /* @__PURE__ */ React2.createElement(Extension, { runServerless: runServerlessFunction, context }));
  const Extension = ({ runServerless, context }) => {
    const [loading, setLoading] = React2.useState(true);
    const [associations, setAssocaitions] = React2.useState();
    const [email, setEmail] = React2.useState("");
    const [url, setUrl] = React2.useState("");
    React2.useEffect(() => {
      runServerless({
        name: "fetchAssociations",
        propertiesToSend: ["hs_object_id"]
      }).then((ret) => {
        setAssocaitions(ret.response.data.CRM.contact.associations);
        setLoading(false);
      });
    }, []);
    const duplicateContact = () => {
      setLoading(true);
      runServerless({
        name: "duplicateContact",
        propertiesToSend: ["hs_object_id"],
        parameters: { associations, email }
      }).then((ret) => {
        setLoading(false);
        const contact = ret.response;
        setUrl(
          `https://app.hubspot.com/contacts/${context.portal.id}/contact/${contact.id}`
        );
      });
    };
    if (loading) {
      return /* @__PURE__ */ React2.createElement(LoadingSpinner, { label: "fetching object associations", grow: true });
    }
    if (associations && url === "") {
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Stack, { direction: "column" }, /* @__PURE__ */ React2.createElement(DescriptionList, { direction: "column" }, /* @__PURE__ */ React2.createElement(DescriptionListItem, { label: "Deals" }, associations.deal_collection__contact_to_deal.total), /* @__PURE__ */ React2.createElement(DescriptionListItem, { label: "Companies" }, associations.company_collection__primary.total))), /* @__PURE__ */ React2.createElement(Stack, { direction: "row" }, /* @__PURE__ */ React2.createElement(
        Input,
        {
          label: "Email",
          name: "email",
          onInput: (v) => setEmail(v),
          required: true
        }
      ), /* @__PURE__ */ React2.createElement(Button, { disabled: email === "", onClick: duplicateContact }, "Duplicate Contact")));
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Link, { href: url }, url.toString()));
  };
})(React, RemoteUI);
