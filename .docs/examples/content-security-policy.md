# Content Security Policy and Nonce in Next.js

## What is Content Security Policy (CSP)?

- **CSP** is a security mechanism that allows developers to control which sources are allowed for different types of content in their web applications¹.
- CSP can help prevent **cross-site scripting (XSS)**, **clickjacking**, and other **code injection attacks** by blocking malicious scripts or resources from loading or executing¹.
- CSP is implemented by sending a **HTTP header** from the server to the browser, specifying the **policy directives** for each content type¹.

## What is a nonce and why use it?

- A **nonce** is a unique, random string of characters that is generated for each request and used only once².
- A nonce can be used in conjunction with CSP to allow certain **inline scripts** or **styles** to execute, bypassing the strict CSP directives that would otherwise block them².
- Inline scripts or styles are sometimes necessary for legitimate purposes, such as dynamic rendering, third-party libraries, or analytics. Nonces offer a way to **whitelist** these scripts or styles without compromising the security of the web application².

## How to use nonce in Next.js?

- Next.js provides a built-in feature called **Middleware** that enables developers to add headers and generate nonces before the page renders³.
- Middleware runs on all requests by default, but can be filtered to run on specific paths using a **matcher** function³.
- Nonces should be generated for every page view, so dynamic rendering is required. Static rendering or server-side rendering will not work with nonces³.
- Nonces can be read from a **Server Component** using the `headers` function, which returns an object with the `nonce` property³.
- Nonces can be applied to inline scripts or styles by using the `nonce` attribute, such as `<script nonce={nonce}>...</script>` or `<style nonce={nonce}>...</style>`³.
- Next.js version **13.4.20+** is recommended to properly handle and apply nonces³.

## References

¹: [Configuring: Content Security Policy | Next.js](^1^)
²: [NextJS Content Security Policy (CSP) - Stack Overflow](^2^)
³: [How to add nonce to inline styles and scripts in Next.js?](^3^)

**Learn more:**
(1) [Configuring: Content Security Policy | Next.js](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
(2) [next.js - NextJS Content Security Policy (CSP) - Stack Overflow](https://stackoverflow.com/questions/69968144/nextjs-content-security-policy-csp)
(3) [How to add nonce to inline styles and scripts in Next.js?](https://stackoverflow.com/questions/76353091/how-to-add-nonce-to-inline-styles-and-scripts-in-next-js)
(4) [Configuring: Content Security Policy | Next.js](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
(5) [next.js - NextJS Content Security Policy (CSP) - Stack Overflow](https://stackoverflow.com/questions/69968144/nextjs-content-security-policy-csp)
(6) [How to add nonce to inline styles and scripts in Next.js?](https://stackoverflow.com/questions/76353091/how-to-add-nonce-to-inline-styles-and-scripts-in-next-js)
(7) [Securing Your Next.js Application with Strict CSP](https://dev.to/snaka/securing-your-nextjs-application-with-strict-csp-4lie)
(8) [Is it possible to apply a Content Security nonce in a js script ....](https://stackoverflow.com/questions/69942656/is-it-possible-to-apply-a-content-security-nonce-in-a-js-script-imported-from-an)
(9) [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)
**(10) [Next.js with strict CSP example](https://github.com/vercel/next.js/tree/canary/examples/with-strict-csp)**
