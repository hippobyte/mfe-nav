import { Nav } from "@hippobyte/stylekit";

export default function Root(props) {
  return (
    <>
      <Nav 
        menu={[
          {
            key: 1,
            title: "Overview",
            path: "/",
          },
          {
            key: 2,
            title: "React",
            path: "/react",
          },
          {
            key: 3,
            title: "Reactive",
            path: "/reactive",
          },
          {
            key: 4,
            title: "Static HTML",
            path: "/static-html",
          },
          {
            key: 5,
            title: "Layout Madness",
            path: "/layout-madness",
          }
        ]}
      />
    </>
  )
}
