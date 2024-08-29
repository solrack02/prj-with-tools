

//
 
          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'home';

          let args: any = [];

          const screens = [
            // 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"home",

          styles:[
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "yellow"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }})],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

          startFunctions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => ({
            // true: "true"
          });
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            // ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
