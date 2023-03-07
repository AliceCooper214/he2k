import{d as r,cm as t,a as c,g as p,o as u,cW as i,_}from"./index.954a2cbc.js";const d=r({__name:"index",props:{clipboardValue:null,renderOnSearch:{type:Boolean}},setup(n){const a=n;t();function o(e){return e.value.replace(/--.*\n/g,"").replace(/\s+/g," ").replace(/\s+\(/,"(").replace(/\s+\)/,")")}function s(e){e.value=l}const l=`CREATE TABLE MortgageCompanies (ID INTEGER PRIMARY KEY, NAME CHAR(30));
INSERT INTO
  MortgageCompanies
VALUES
  (1, 'Quicken Loans');
INSERT INTO
  MortgageCompanies
VALUES
  (2, 'Wells Fargo Bank');
INSERT INTO
  MortgageCompanies
VALUES
  (3, 'JPMorgan Chase Bank');
SELECT
  *
FROM
  MortgageCompanies;`;return(e,g)=>(u(),c(p(i),{onChange:o,onMounted:s,"auto-fill":"","auto-fill-type":"sql","clipboard-value":a.clipboardValue},null,8,["clipboard-value"]))}});const E=_(d,[["__scopeId","data-v-e0cf8f4e"]]);export{E as default};
