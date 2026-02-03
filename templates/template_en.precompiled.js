(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template_en'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"prefix") : depths[1]), depth0))
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":137},"end":{"line":6,"column":145}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias2,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":145},"end":{"line":6,"column":175}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias2,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":175},"end":{"line":6,"column":201}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return ", ";
},"4":function(container,depth0,helpers,partials,data) {
    return ", and ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " under "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":7,"column":119},"end":{"line":7,"column":137}}}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "This study is funded and financed by the research project "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"funding") || (depth0 != null ? lookupProperty(depth0,"funding") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"funding","hash":{},"data":data,"loc":{"start":{"line":8,"column":85},"end":{"line":8,"column":96}}}) : helper)))
    + ".";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>We will record personal demographics ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":13,"column":81},"end":{"line":13,"column":97}}}) : helper)))
    + ").</li>";
},"12":function(container,depth0,helpers,partials,data) {
    return "<li>We will take photos during the session.</li>";
},"14":function(container,depth0,helpers,partials,data) {
    return "<li>We will record videos during the session.</li>";
},"16":function(container,depth0,helpers,partials,data) {
    return "<li>We will record audio during the session.</li>";
},"18":function(container,depth0,helpers,partials,data) {
    return "<li>We will track your body motion during the session.</li>";
},"20":function(container,depth0,helpers,partials,data) {
    return "<li>We will track your eye and head motion during the session.</li>";
},"22":function(container,depth0,helpers,partials,data) {
    return "<li>We will take physiological measurements of your body.</li>";
},"24":function(container,depth0,helpers,partials,data) {
    return "<li>We will record the screen on your device that are necessary for the study.</li>";
},"26":function(container,depth0,helpers,partials,data) {
    return "<li>We will record interaction data (e.g., clicks, timings) during the session.</li>";
},"28":function(container,depth0,helpers,partials,data) {
    return "<li>You will receive 1 credit point per hour for your study course as compensation.</li>\n            ";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":23,"column":22},"end":{"line":23,"column":56}}}),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":25,"column":62}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>You will receive 1 credit point per hour for your study course as compensation or "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":23,"column":144},"end":{"line":23,"column":168}}}) : helper)))
    + " as monetary compensation.</li>\n            ";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":24,"column":22},"end":{"line":24,"column":50}}}),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.program(36, data, 0),"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":25,"column":62}}})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>You will receive "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":24,"column":73},"end":{"line":24,"column":97}}}) : helper)))
    + " as compensation.</li>\n            ";
},"36":function(container,depth0,helpers,partials,data) {
    return "<li>You will receive no compensation.</li>";
},"38":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li>All data you provide in this "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":27,"column":72},"end":{"line":27,"column":80}}}) : helper)))
    + " will be published <b>not anonymized</b></li>.\n            ";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":28,"column":22},"end":{"line":28,"column":48}}}),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.program(43, data, 0),"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":29,"column":151}}})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    return "<li>All data you provide in this field study will be published anonymized; thus, they will neither include your name nor cannot be associated with your identity.</li>\n            ";
},"43":function(container,depth0,helpers,partials,data) {
    return "<li>The data collected cannot be viewed or used for further research by anyone outside the researchers involved in this work. </li>";
},"45":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                our ethics committee office: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ethicalComittee") || (depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ethicalComittee","hash":{},"data":data,"loc":{"start":{"line":34,"column":45},"end":{"line":34,"column":64}}}) : helper)))
    + ".\n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.program(50, data, 0),"data":data,"loc":{"start":{"line":36,"column":16},"end":{"line":40,"column":23}}})) != null ? stack1 : "");
},"48":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":37,"column":33}}}) : helper)))
    + " (E-Mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":37,"column":43},"end":{"line":37,"column":57}}}) : helper)))
    + ") or "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":37,"column":62},"end":{"line":37,"column":80}}}) : helper)))
    + ".\n";
},"50":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":39,"column":20},"end":{"line":39,"column":33}}}) : helper)))
    + " (E-Mail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":39,"column":43},"end":{"line":39,"column":57}}}) : helper)))
    + ").\n";
},"52":function(container,depth0,helpers,partials,data) {
    return "surveyed";
},"54":function(container,depth0,helpers,partials,data) {
    return "tested";
},"56":function(container,depth0,helpers,partials,data) {
    return "interviewed";
},"58":function(container,depth0,helpers,partials,data) {
    return "You will receive no compensation.\n            ";
},"60":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":59,"column":22},"end":{"line":59,"column":51}}}),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.program(63, data, 0),"data":data,"loc":{"start":{"line":59,"column":12},"end":{"line":61,"column":134}}})) != null ? stack1 : "");
},"61":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "You will receive one credit point per hour required for your study course at the "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"intitution") || (depth0 != null ? lookupProperty(depth0,"intitution") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"intitution","hash":{},"data":data,"loc":{"start":{"line":59,"column":134},"end":{"line":59,"column":148}}}) : helper)))
    + ". You may withdraw and discontinue participation at any time without justification for withdrawing. You will still receive your credit points.\n            ";
},"63":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"moneyPoints",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":60,"column":22},"end":{"line":60,"column":56}}}),{"name":"if","hash":{},"fn":container.program(64, data, 0),"inverse":container.program(66, data, 0),"data":data,"loc":{"start":{"line":60,"column":12},"end":{"line":61,"column":134}}})) != null ? stack1 : "");
},"64":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "You will receive "
    + alias4(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":60,"column":75},"end":{"line":60,"column":99}}}) : helper)))
    + " as compensation for your participation or one credit point per hour required for your study course at the "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":60,"column":206},"end":{"line":60,"column":221}}}) : helper)))
    + ".\n            ";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"money",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":61,"column":22},"end":{"line":61,"column":50}}}),{"name":"if","hash":{},"fn":container.program(67, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":61,"column":134}}})) != null ? stack1 : "");
},"67":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "You will receive "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monetaryCompensation") || (depth0 != null ? lookupProperty(depth0,"monetaryCompensation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monetaryCompensation","hash":{},"data":data,"loc":{"start":{"line":61,"column":69},"end":{"line":61,"column":93}}}) : helper)))
    + " as compensation for your participation. ";
},"69":function(container,depth0,helpers,partials,data) {
    return "You may withdraw and discontinue participation at any time.\n            ";
},"71":function(container,depth0,helpers,partials,data) {
    return "You may withdraw and discontinue participation at any time without penalty or losing the compensation. ";
},"73":function(container,depth0,helpers,partials,data) {
    return "The investigator may withdraw you from this research if your physician tells us that continued participation may injure your health. ";
},"75":function(container,depth0,helpers,partials,data) {
    return "I have the right not to answer questions, and if I feel uncomfortable in any way during the interview session, I have the right to withdraw from the interview. ";
},"77":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (You will not directly benefit through participation in this "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":83,"column":77},"end":{"line":83,"column":85}}}) : helper)))
    + ". We hope that the settings obtained from your participation may help to bring forward the research in this field.)\n";
},"79":function(container,depth0,helpers,partials,data) {
    return "                Your benefit in participating is your compensation described above.\n";
},"81":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "We will record personal data ("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"personalData") || (depth0 != null ? lookupProperty(depth0,"personalData") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"personalData","hash":{},"data":data,"loc":{"start":{"line":102,"column":68},"end":{"line":102,"column":84}}}) : helper)))
    + ") during participation. ";
},"83":function(container,depth0,helpers,partials,data) {
    return "The contact details of the study participants can be used to track potential infection chains. ";
},"85":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "All the data you provide in this "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":106,"column":78},"end":{"line":106,"column":86}}}) : helper)))
    + " will be encrypted. ";
},"87":function(container,depth0,helpers,partials,data) {
    return " and record browser meta data";
},"89":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                All data you provide in this "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":115,"column":45},"end":{"line":115,"column":53}}}) : helper)))
    + " will be published <b>not anonymized</b>. Subsequent uses of records and data will be subject to standard data use policies.\n";
},"91":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anomymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":116,"column":22},"end":{"line":116,"column":48}}}),{"name":"if","hash":{},"fn":container.program(92, data, 0),"inverse":container.program(94, data, 0),"data":data,"loc":{"start":{"line":116,"column":12},"end":{"line":126,"column":12}}})) != null ? stack1 : "");
},"92":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                All data you provide in this "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":117,"column":45},"end":{"line":117,"column":53}}}) : helper)))
    + " will be published anonymized. Subsequent uses of records and data\n                will be subject to standard data use policies that protect the participating individuals' anonymity. We\n                will remove or code any personal information that could identify you before publishing the data to\n                ensure that no one can identify you from the information we share. We will use current scientific\n                standards and known methods for anonymization. When your data are anonymized, they are altered in a\n                manner that they can no longer be traced back to your person or only with disproportionate technical\n                effort. Despite these measures, we cannot guarantee the anonymity of your personal data.\n";
},"94":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                All data you provide in this "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":125,"column":45},"end":{"line":125,"column":53}}}) : helper)))
    + " will not be published and kept confidential.\n            ";
},"96":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":129,"column":22},"end":{"line":129,"column":43}}}),{"name":"if","hash":{},"fn":container.program(97, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":129,"column":16},"end":{"line":133,"column":23}}})) != null ? stack1 : "");
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        The interview transcript will be primarily analyzed by "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":79},"end":{"line":130,"column":116}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(100, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":116},"end":{"line":130,"column":204}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(103, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":204},"end":{"line":130,"column":301}}})) != null ? stack1 : "")
    + ".\n                        Access to the raw interview transcript will be limited to the authors of this research, academic colleagues, and researchers with whom he might collaborate as part of the research process.\n                        Any summary interview content, or direct quotations from the interview, that are made available through academic publications or other outlets will be anonymized so that you cannot be identified, and care will be taken to ensure that other settings in the interview that could identify you is not revealed. I have the right not to answer questions, and if I feel uncomfortable in any way during the interview session, I have the right to withdraw from the interview.\n";
},"98":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":130,"column":96},"end":{"line":130,"column":109}}}) : helper)));
},"100":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(101, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":144},"end":{"line":130,"column":172}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondResearcherName") || (depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"secondResearcherName","hash":{},"data":data,"loc":{"start":{"line":130,"column":173},"end":{"line":130,"column":197}}}) : helper)));
},"101":function(container,depth0,helpers,partials,data) {
    return " and";
},"103":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"secondResearcherName") : depth0),{"name":"if","hash":{},"fn":container.program(101, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":231},"end":{"line":130,"column":270}}})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"thirdResearcherName") || (depth0 != null ? lookupProperty(depth0,"thirdResearcherName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"thirdResearcherName","hash":{},"data":data,"loc":{"start":{"line":130,"column":271},"end":{"line":130,"column":294}}}) : helper)));
},"105":function(container,depth0,helpers,partials,data) {
    return "                This site uses cookies and other tracking technologies to conduct the research, to improve the user experience, the ability to interact with the system and to provide additional content from third parties. Despite careful control of content, the researchers assume no liability for damages, which directly or indirectly result from the use of this online application.\n";
},"107":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                Your non-anonymized data will be stored for "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"storageTime") || (depth0 != null ? lookupProperty(depth0,"storageTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"storageTime","hash":{},"data":data,"loc":{"start":{"line":143,"column":60},"end":{"line":143,"column":75}}}) : helper)))
    + " from the time your consent is given, unless you withdraw your consent before this period has elapsed. Your non-anonymized data will be stored in a secure location and will be accessible only to the researchers involved in this work.\n";
},"109":function(container,depth0,helpers,partials,data) {
    return "                Your non-anonymized data will be stored indefinitely, unless you withdraw your consent.\n";
},"111":function(container,depth0,helpers,partials,data) {
    return "                Non-anonymized data collected can be shared publicly unless you have not signed the separate permission form allowing us to so (see below).\n";
},"113":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"anonymized",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":151,"column":22},"end":{"line":151,"column":48}}}),{"name":"if","hash":{},"fn":container.program(114, data, 0),"inverse":container.program(116, data, 0),"data":data,"loc":{"start":{"line":151,"column":12},"end":{"line":155,"column":12}}})) != null ? stack1 : "");
},"114":function(container,depth0,helpers,partials,data) {
    return "                Anonymized data collected can be shared publicly.\n";
},"116":function(container,depth0,helpers,partials,data) {
    return "                The data collected cannot be viewed or used for further research by everyone outside the researchers involved in this work.\n            ";
},"118":function(container,depth0,helpers,partials,data) {
    return "                The data collected will be deleted after the end of the research, or if you contact the researcher to delete them.\n";
},"120":function(container,depth0,helpers,partials,data) {
    return "                Data collected that have not been made public will be deleted after the end of the research.\n";
},"122":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p>"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"each","hash":{},"fn":container.program(123, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":169,"column":15},"end":{"line":171,"column":21}}})) != null ? stack1 : "")
    + "</p>\n";
},"123":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n                "
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"prefix") : depths[1]), depth0))
    + " "
    + alias1(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":170,"column":30},"end":{"line":170,"column":38}}}) : helper)))
    + " ("
    + alias1(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":170,"column":40},"end":{"line":170,"column":49}}}) : helper)))
    + ") <br />\n            ";
},"125":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p><b>Principal Investigator:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":174,"column":46},"end":{"line":174,"column":59}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":174,"column":61},"end":{"line":174,"column":71}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":174,"column":73},"end":{"line":174,"column":80}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":174,"column":81},"end":{"line":174,"column":89}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"country") : depth0),{"name":"if","hash":{},"fn":container.program(126, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":89},"end":{"line":174,"column":124}}})) != null ? stack1 : "")
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIemail") || (depth0 != null ? lookupProperty(depth0,"thePIemail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIemail","hash":{},"data":data,"loc":{"start":{"line":174,"column":126},"end":{"line":174,"column":140}}}) : helper)))
    + ")</p>\n";
},"126":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"country","hash":{},"data":data,"loc":{"start":{"line":174,"column":106},"end":{"line":174,"column":117}}}) : helper)));
},"128":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":177,"column":18},"end":{"line":177,"column":52}}}),{"name":"if","hash":{},"fn":container.program(129, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":177,"column":12},"end":{"line":179,"column":19}}})) != null ? stack1 : "");
},"129":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <p><b>Department Head:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"departmentHead") || (depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"departmentHead","hash":{},"data":data,"loc":{"start":{"line":178,"column":43},"end":{"line":178,"column":61}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"street") || (depth0 != null ? lookupProperty(depth0,"street") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"street","hash":{},"data":data,"loc":{"start":{"line":178,"column":63},"end":{"line":178,"column":73}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"zip") || (depth0 != null ? lookupProperty(depth0,"zip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zip","hash":{},"data":data,"loc":{"start":{"line":178,"column":75},"end":{"line":178,"column":82}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":178,"column":83},"end":{"line":178,"column":91}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data,"loc":{"start":{"line":178,"column":93},"end":{"line":178,"column":104}}}) : helper)))
    + ")</p>\n";
},"131":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr>\n                    <td class=\"check\">&#9744;</td>\n                    <td>I agree that my data records and measurements during the study can be published in context of this research in non-anonymized from.</td>\n                </tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(132, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":205,"column":16},"end":{"line":210,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(134, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":211,"column":16},"end":{"line":216,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(136, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":217,"column":16},"end":{"line":222,"column":23}}})) != null ? stack1 : "")
    + "                <tr><td colspan=\"2\">I understand that data will be anonymized cannot be associated with my name. From the consent of publication, I do not derive any rights (such as any renumeration or co-authorship). This declaration of consent is revocable at any time in line with the GDPR. In the case of revocation, the published recordings, insofar as they are subject to the disposition of the researchers, will be removed. Further recordings are no longer used or published after revocation of publication.</td></tr>\n";
},"132":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\">&#9744;</td>\n                        <td class=\"additional\">I additionally agree that photos during this study can be made and published.</td>\n                    </tr>\n";
},"134":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\">&#9744;</td>\n                        <td class=\"additional\">I additionally agree that videos during this study can be recorded and published.</td>\n                    </tr>\n";
},"136":function(container,depth0,helpers,partials,data) {
    return "                    <tr>\n                        <td class=\"check additional\">&#9744;</td>\n                        <td class=\"additional\">I additionally agree that audio files during this study can be recorded and published.</td>\n                    </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"frameStyle\">\n    <div class=\"row\" id=\"firstItem\">\n        <div class=\"col mt-2 mb-2 \"><img alt=\"Logo\" class=\"float-right\" src=\"./img/"
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":3,"column":83},"end":{"line":3,"column":91}}}) : helper)))
    + "\"></div>\n    </div>\n    <div class=\"pageBreak\"><h1>Informed Consent of Participation</h1>\n        <p>You are invited to participate in the "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":57}}}) : helper)))
    + " <b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":61},"end":{"line":6,"column":70}}}) : helper)))
    + "</b>, initiated and conducted by "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":103},"end":{"line":6,"column":210}}})) != null ? stack1 : "")
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":6,"column":210},"end":{"line":6,"column":223}}}) : helper)))
    + ". The\n            research is supervised by "
    + alias4(((helper = (helper = lookupProperty(helpers,"thePIname") || (depth0 != null ? lookupProperty(depth0,"thePIname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thePIname","hash":{},"data":data,"loc":{"start":{"line":7,"column":38},"end":{"line":7,"column":51}}}) : helper)))
    + " at "
    + alias4(((helper = (helper = lookupProperty(helpers,"institution") || (depth0 != null ? lookupProperty(depth0,"institution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"institution","hash":{},"data":data,"loc":{"start":{"line":7,"column":55},"end":{"line":7,"column":70}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":7,"column":76},"end":{"line":7,"column":110}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":70},"end":{"line":7,"column":144}}})) != null ? stack1 : "")
    + ".\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"funding") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":104}}})) != null ? stack1 : "")
    + "\n            Please note:</p>\n        <ul>\n            <li>Your participation is voluntary.</li>\n            <li>The "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":12,"column":20},"end":{"line":12,"column":28}}}) : helper)))
    + " will last approximately "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":12,"column":53},"end":{"line":12,"column":65}}}) : helper)))
    + ".</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":111}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"photos") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":88}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"videos") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":90}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"audio") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":88}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"motion") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":99}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"eyetracking") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":112}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"physiological") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":109}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"screenrecording") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":132}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"interaction") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":129}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"points",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":22,"column":18},"end":{"line":22,"column":47}}}),{"name":"if","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.program(30, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":25,"column":69}}})) != null ? stack1 : "")
    + "            <li>We may publish results from this and other sessions.</li>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":27,"column":18},"end":{"line":27,"column":37}}}),{"name":"if","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.program(40, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":29,"column":158}}})) != null ? stack1 : "")
    + "        </ul>\n        <p>If you have any questions about the whole informed consent process of this research or your rights as a\n            human research subject, please contact\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ethicalComittee") : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0, blockParams, depths),"inverse":container.program(47, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":41,"column":19}}})) != null ? stack1 : "")
    + "\n            You should carefully read the settings below. You may take as much time as you need to read the consent\n            form. If you do not fully agree with something, or if your questions have not all been answered to your\n            satisfaction, then you should not give your consent. </p>\n    </div>\n    <div class=\"pageBreak\"><h3>1. Purpose and Goal of this Research</h3>\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"purpose") || (depth0 != null ? lookupProperty(depth0,"purpose") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"purpose","hash":{},"data":data,"loc":{"start":{"line":48,"column":11},"end":{"line":48,"column":22}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"goal") || (depth0 != null ? lookupProperty(depth0,"goal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goal","hash":{},"data":data,"loc":{"start":{"line":48,"column":23},"end":{"line":48,"column":31}}}) : helper)))
    + " Your participation will help us achieve this goal. The results of this research may be\n            presented at scientific or professional meetings or published in scientific proceedings and\n            journals.</p></div>\n    <div class=\"pageBreak\"><h3>2. Participation and Compensation</h3>\n        <p>Your participation in this "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":52,"column":38},"end":{"line":52,"column":46}}}) : helper)))
    + " is voluntary. You will be one of approximately "
    + alias4(((helper = (helper = lookupProperty(helpers,"participants") || (depth0 != null ? lookupProperty(depth0,"participants") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"participants","hash":{},"data":data,"loc":{"start":{"line":52,"column":94},"end":{"line":52,"column":110}}}) : helper)))
    + " people being\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":53,"column":18},"end":{"line":53,"column":45}}}),{"name":"if","hash":{},"fn":container.program(52, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":12},"end":{"line":53,"column":62}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"user study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":54,"column":18},"end":{"line":54,"column":43}}}),{"name":"if","hash":{},"fn":container.program(54, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":12},"end":{"line":54,"column":58}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"field study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":55,"column":18},"end":{"line":55,"column":44}}}),{"name":"if","hash":{},"fn":container.program(52, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":12},"end":{"line":55,"column":61}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":56,"column":18},"end":{"line":56,"column":42}}}),{"name":"if","hash":{},"fn":container.program(56, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":12},"end":{"line":56,"column":62}}})) != null ? stack1 : "")
    + "\n             for this research.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":58,"column":18},"end":{"line":58,"column":45}}}),{"name":"if","hash":{},"fn":container.program(58, data, 0, blockParams, depths),"inverse":container.program(60, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":58,"column":12},"end":{"line":61,"column":141}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":62,"column":18},"end":{"line":62,"column":45}}}),{"name":"if","hash":{},"fn":container.program(69, data, 0, blockParams, depths),"inverse":container.program(71, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":63,"column":130}}})) != null ? stack1 : "")
    + "\n            If possible, you may refuse to answer any questions you do not want to answer or withdraw from participation at any time.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"experimental study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":51}}}),{"name":"if","hash":{},"fn":container.program(73, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":12},"end":{"line":65,"column":193}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":66,"column":18},"end":{"line":66,"column":42}}}),{"name":"if","hash":{},"fn":container.program(75, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":12},"end":{"line":66,"column":211}}})) != null ? stack1 : "")
    + "\n        </p>\n        <p>At any time and without giving any reason, you can notify us that you want to withdraw the consent given\n            (GDPR Art. 21). In case of withdrawal, your data stored based on your consent will be deleted or\n            anonymized where this is legally permissible (GDPR Art. 17). If deletion is impossible or only possible\n            with unreasonable technical effort, your data will be anonymized by deleting the personal identification\n            information. However, anonymization of your data cannot entirely exclude the possibility of subsequent\n            tracing of information to you via other sources. Finally, once the data is anonymized, the deletion of\n            the data is not possible anymore as we will not be able to identify which data is yours. </p></div>\n    <div class=\"pageBreak\"><h3>3. Procedure</h3>\n        <p>After giving consent, you will be guided through the following steps:</p>\n        <p style=\"padding-left: 10px; padding-top: 0px\">"
    + alias4((lookupProperty(helpers,"breaklines")||(depth0 && lookupProperty(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"procedure") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":77,"column":56},"end":{"line":77,"column":80}}}))
    + "</p>\n        <p>The complete procedure of this "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":78,"column":42},"end":{"line":78,"column":50}}}) : helper)))
    + " will last approximately "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":78,"column":75},"end":{"line":78,"column":87}}}) : helper)))
    + ".</p></div>\n    <div class=\"pageBreak\"><h3>4. Risks and Benefits</h3>\n        <p>There are no risks associated with this field study. Discomforts or inconveniences will be minor and are\n            unlikely to happen. If you feel uncomfortable, you may discontinue your participation.\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"compensation") : depth0),"none",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":82,"column":18},"end":{"line":82,"column":45}}}),{"name":"if","hash":{},"fn":container.program(77, data, 0, blockParams, depths),"inverse":container.program(79, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":82,"column":12},"end":{"line":86,"column":19}}})) != null ? stack1 : "")
    + "            With this research, we will advance knowledge in this research field.</p></div>\n    <div class=\"pageBreak\"><h3>5. Data Protection and Confidentiality</h3>\n        <p>The General Data Protection Regulation (GDPR) of the European Union (EU) governs that data collection\n            process. The legal basis for processing the personal data is the consent in accordance with GDPR Art. 6\n            (1). The GDPR guarantees a set of right to the data subjects, including the right to access,\n            rectification, and erasure of personal data. </p>\n        <ul>\n            <li>You have the right to access your personal data at any time (GDPR Art. 15).</li>\n            <li>You have the right to correct inaccurate personal data at any time (GDPR Art. 16).</li>\n            <li>You have the right to have your personal data deleted (GDPR Art. 17).</li>\n            <li>You have the right to limit the processing of your personal data (GDPR Art. 18).</li>\n            <li>You have the right to have your data transferred to others (GDPR Art. 20).</li>\n            <li>You have the right to withdraw the consent given (GDPR Art. 21).</li>\n        </ul>\n        <p>If you wish to exercise any of your rights, please contact the researchers. </p>\n        <p>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"record") : depth0)) != null ? lookupProperty(stack1,"demographics") : stack1),{"name":"if","hash":{},"fn":container.program(81, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":11},"end":{"line":102,"column":115}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":103,"column":18},"end":{"line":103,"column":45}}}),{"name":"if","hash":{},"fn":container.program(83, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":103,"column":12},"end":{"line":103,"column":149}}})) != null ? stack1 : "")
    + "\n            Researchers will not identify you by your real name in any reports using settings obtained from this "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":104,"column":113},"end":{"line":104,"column":121}}}) : helper)))
    + ", and\n            your confidentiality as a participant in this "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":105,"column":58},"end":{"line":105,"column":66}}}) : helper)))
    + " will remain secure.\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encryption") : depth0),"true",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":106,"column":18},"end":{"line":106,"column":43}}}),{"name":"if","hash":{},"fn":container.program(85, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":106,"column":12},"end":{"line":106,"column":113}}})) != null ? stack1 : "")
    + "\n            Data collected in this "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":107,"column":35},"end":{"line":107,"column":43}}}) : helper)))
    + " will be treated in compliance with the GDPR. </p>\n        <p>We will record\n            "
    + alias4((lookupProperty(helpers,"listTrueKeys")||(depth0 && lookupProperty(depth0,"listTrueKeys"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"record") : depth0),(depth0 != null ? lookupProperty(depth0,"translations") : depth0),{"name":"listTrueKeys","hash":{},"data":data,"loc":{"start":{"line":109,"column":12},"end":{"line":109,"column":48}}}))
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":110,"column":18},"end":{"line":110,"column":45}}}),{"name":"if","hash":{},"fn":container.program(87, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":110,"column":12},"end":{"line":110,"column":83}}})) != null ? stack1 : "")
    + "\n             during the "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":111,"column":24},"end":{"line":111,"column":32}}}) : helper)))
    + ".\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":114,"column":18},"end":{"line":114,"column":37}}}),{"name":"if","hash":{},"fn":container.program(89, data, 0, blockParams, depths),"inverse":container.program(91, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":114,"column":12},"end":{"line":126,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"interview",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":128,"column":18},"end":{"line":128,"column":42}}}),{"name":"if","hash":{},"fn":container.program(96, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":128,"column":12},"end":{"line":134,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"online study",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":136,"column":18},"end":{"line":136,"column":45}}}),{"name":"if","hash":{},"fn":container.program(105, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":136,"column":12},"end":{"line":138,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"unequal")||(depth0 && lookupProperty(depth0,"unequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"unequal","hash":{},"data":data,"loc":{"start":{"line":142,"column":18},"end":{"line":142,"column":39}}}),{"name":"if","hash":{},"fn":container.program(107, data, 0, blockParams, depths),"inverse":container.program(109, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":142,"column":12},"end":{"line":146,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":149,"column":18},"end":{"line":149,"column":37}}}),{"name":"if","hash":{},"fn":container.program(111, data, 0, blockParams, depths),"inverse":container.program(113, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":149,"column":12},"end":{"line":155,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"no",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":157,"column":18},"end":{"line":157,"column":36}}}),{"name":"if","hash":{},"fn":container.program(118, data, 0, blockParams, depths),"inverse":container.program(120, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":157,"column":12},"end":{"line":161,"column":19}}})) != null ? stack1 : "")
    + "        </p>\n        <p>As with any publication or online-related activity, the risk of a breach of confidentiality is always\n            possible. According to the GDPR, the researchers will inform the participant if a breach of confidential\n            data is detected. </p></div>\n    <div class=\"pageBreak\"><h3>6. Identification of Investigators</h3>\n        <p>If you have any questions or concerns about the research, please feel free to contact: </p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"researchers") : depth0),{"name":"if","hash":{},"fn":container.program(122, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":168,"column":8},"end":{"line":172,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thePIname") : depth0),{"name":"if","hash":{},"fn":container.program(125, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":173,"column":8},"end":{"line":175,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"departmentHead") : depth0),{"name":"if","hash":{},"fn":container.program(128, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":176,"column":8},"end":{"line":180,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pageBreak\"><h3>7. Informed Consent and Agreement</h3>This consent form will be retained securely and\n        in compliance with the GDPR for no longer than necessary.\n        <table>\n            <tbody>\n            <tr>\n                <td class=\"check\">&#9744;</td>\n                <td>I understand the explanation provided to me. I have been given a copy of this form. I have\n                    had all my questions answered to my satisfaction, and I voluntarily agree to participate in this\n                    field study.\n                </td>\n            </tr>\n            <tr>\n                <td class=\"check\">&#9744;</td>\n                <td>I voluntarily consent to my data being recorded and subsequently processed in line with the\n                    GDPR. I have been informed about the consequences of withdrawing my consent.\n                </td>\n            </tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"equal")||(depth0 && lookupProperty(depth0,"equal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"share") : depth0),"yes",{"name":"equal","hash":{},"data":data,"loc":{"start":{"line":199,"column":18},"end":{"line":199,"column":37}}}),{"name":"if","hash":{},"fn":container.program(131, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":199,"column":12},"end":{"line":224,"column":19}}})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n        <table id=\"signatures\">\n            <tbody>\n            <tr>\n                <td class=\"sign\"></td>\n                <td></td>\n            </tr>\n            <tr>\n                <td>Printed Name of Subject</td>\n                <td></td>\n            </tr>\n            <tr>\n                <td class=\"sign\"></td>\n                <td class=\"sign\"></td>\n            </tr>\n            <tr>\n                <td>Signature of Subject</td>\n                <td>Location, Date</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});
})();