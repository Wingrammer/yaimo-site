import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    // layout('routes/layout.tsx', [
        index('routes/home.tsx'),
        route('drivers', 'routes/drivers.tsx'),
        route('tech', 'routes/tech.tsx'),
        route('contact', 'routes/contact.tsx'),
    // ])
] satisfies RouteConfig;
