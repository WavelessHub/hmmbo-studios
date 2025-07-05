"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Twitter,
  Twitch,
  Mail,
  Heart,
  Download,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { footerLinks } from "@/constants/footer";

const Footer = () => {
  return (
    <footer className="bg-zinc-900/40 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="py-12 grid lg:grid-cols-6 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating exceptional Minecraft plugins that enhance gameplay and
              bring communities together. Trusted by thousands of servers
              worldwide.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-green-600 text-white">
                <Shield className="w-3 h-3 mr-1" /> Secure
              </Badge>
              <Badge className="bg-blue-600 text-white">
                <Zap className="w-3 h-3 mr-1" /> Fast
              </Badge>
              <Badge className="bg-purple-600 text-white">
                <Users className="w-3 h-3 mr-1" /> 10K+ Users
              </Badge>
            </div>

            <div className="flex space-x-4">
              {[
                [Twitch, "Twitch"],
                [Twitter, "Twitter"],
                [Github, "Github"],
                [Mail, "Mail"],
              ].map(([Icon, key]) => (
                <Button
                  key={key as string}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* ml-auto shunts the whole block to the far right side */
            className="lg:col-span-4 lg:ml-auto grid sm:grid-cols-2 md:grid-cols-2 gap-8"
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-lg mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      {/* swap to <a> once real URLs exist */}
                      <button className="text-gray-400 hover:text-white transition-colors text-left">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-4 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© 2024 HMMBO Studios. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for the Minecraft community</span>
          </div>

          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-1">
              <Download className="w-4 h-4" />
              <span className="text-sm">50K+ Downloads</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <span className="text-sm">Version&nbsp;2024.1</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
