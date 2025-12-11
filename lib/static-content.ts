
export const staticContent: { [key: string]: { title: string; body: string } } = {
  'about': {
    title: 'About Doodax',
    body: `<div class="space-y-4">
             <p><strong>Doodax</strong> is a visionary developer tool crafted by <strong>HSINI MOHAMED</strong>. Born from the need for speed and aesthetic precision, Doodax serves the global design community by eliminating the friction of finding placeholder assets.</p>
             <p>Our mission is simple: To provide a seamless, beautiful, and distraction-free interface for generating random imagery that inspires creativity rather than hindering it.</p>
             <p>Powered by the Unsplash API and built with cutting-edge React technologies, Doodax represents the intersection of utility and art.</p>
           </div>`
  },
  'guide': {
    title: 'How to Use Doodax',
    body: `<div class="space-y-6">
             <div class="bg-white/5 p-4 rounded-lg">
               <h4 class="text-lg font-bold text-white mb-2">1. Search</h4>
               <p class="text-sm">Enter descriptive keywords like "nature", "architecture", or "neon city". Multiple keywords can be comma-separated.</p>
             </div>
             <div class="bg-white/5 p-4 rounded-lg">
               <h4 class="text-lg font-bold text-white mb-2">2. Size</h4>
               <p class="text-sm">Specify your exact dimensions (Width x Height) to match your CSS layout needs.</p>
             </div>
             <div class="bg-white/5 p-4 rounded-lg">
               <h4 class="text-lg font-bold text-white mb-2">3. Refine</h4>
               <p class="text-sm">Use our built-in studio tools to flip the image or apply Grayscale, Sepia, or Blur filters instantly.</p>
             </div>
             <p><strong>Pro Tip:</strong> Right-click any image to save it directly to your device.</p>
           </div>`
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    body: `<div class="space-y-4 text-sm">
             <p><strong>Last Updated: October 2024</strong></p>
             <p>At <strong>Doodax.com</strong>, we believe in privacy by design.</p>
             <ul class="list-disc pl-5 space-y-2">
               <li><strong>No Tracking:</strong> We do not use cookies to track your personal browsing history.</li>
               <li><strong>No Storage:</strong> Images generated are streamed directly from Unsplash to your browser. We do not store them on our servers.</li>
               <li><strong>Data Collection:</strong> We do not collect names, emails, or personal data unless you voluntarily email us.</li>
             </ul>
             <p>For any privacy-related concerns, please contact our Data Protection Officer at <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a>.</p>
           </div>`
  },
  'terms-of-service': {
    title: 'Terms of Service',
    body: `<div class="space-y-4 text-sm">
             <p>By accessing <strong>Doodax.com</strong>, you agree to the following terms:</p>
             <ol class="list-decimal pl-5 space-y-2">
               <li><strong>Usage:</strong> This tool is provided "as is". We make no guarantees regarding uptime or API availability.</li>
               <li><strong>Copyright:</strong> All images are property of their respective owners on Unsplash. You must adhere to the <a href="https://unsplash.com/license" target="_blank" class="text-blue-400">Unsplash License</a>.</li>
               <li><strong>Liability:</strong> Doodax.com and HSINI MOHAMED are not liable for any damages arising from the use of this tool.</li>
             </ol>
           </div>`
  },
  'dmca': {
    title: 'DMCA & Copyright Compliance',
    body: `<div class="space-y-4">
             <p><strong>Doodax.com</strong> respects the intellectual property rights of others.</p>
             <p>Our service acts as a search interface/proxy for the Unsplash Source API. We do not host, store, or transmit any image files from our own servers. All content is served directly from Unsplash.</p>
             <p>If you believe your copyrighted work is being infringed, please direct your Takedown Notice to <strong>Unsplash.com</strong> directly, as they are the host of the content.</p>
             <p>For platform-specific inquiries, contact us at <a href="mailto:hsini.web@gmail.com" class="text-blue-400">hsini.web@gmail.com</a>.</p>
           </div>`
  }
};
