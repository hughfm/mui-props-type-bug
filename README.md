# Minimal reproduction for Material UI type bug

There seems to be a TypeScript problem with `CardHeader` props that overlap
with HTML attributes, for example `title`.

The component itself behaves fine, however using the exported `CardHeaderProps`
type does not allow assigning a `JSX.Element` to the `title` prop.

Examples are provided in src/index.tsx. To reproduce, run `yarn run compile`.

The resulting compile error:

```
src/index.tsx:21:3 - error TS2322: Type 'Element' is not assignable to type 'string | ({} & string) | (ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)> & string) | (ReactNodeArray & string) | (ReactPortal & string) | undefined'.
  Type 'Element' is not assignable to type 'ReactPortal & string'.
    Property 'children' is missing in type 'Element' but required in type 'ReactPortal'.

21   title: <div>Element Title</div>,
     ~~~~~

  node_modules/@types/react/index.d.ts:192:9
    192         children: ReactNode;
                ~~~~~~~~
    'children' is declared here.
  node_modules/@material-ui/core/CardHeader/CardHeader.d.ts:42:5
    42     title?: React.ReactNode;
           ~~~~~
    The expected type comes from property 'title' which is declared here on type 'OverrideProps<CardHeaderTypeMap<{}, "div", "span", "span">, "div">'
```
