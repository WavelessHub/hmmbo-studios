"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <footer className="bg-zinc-900/50 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 border-b border-gray-800"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Stay Updated with HMMBO Studios
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get notified about new plugin releases, updates, and exclusive
              offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email..."
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="minecraft-shadow pulse-glow">Subscribe</Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center minecraft-shadow">
                  <span className="text-white font-bold text-xl pixelated">
                    H
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    HMMBO STUDIOS
                  </span>
                  <p className="text-gray-400 text-sm">
                    Premium Minecraft Plugins
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating exceptional Minecraft plugins that enhance gameplay and
                bring communities together. Trusted by thousands of servers
                worldwide.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-green-600 text-white">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
                <Badge className="bg-blue-600 text-white">
                  <Zap className="w-3 h-3 mr-1" />
                  Fast
                </Badge>
                <Badge className="bg-purple-600 text-white">
                  <Users className="w-3 h-3 mr-1" />
                  10K+ Users
                </Badge>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Twitch className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-bold text-lg mb-4 text-white">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <button className="text-gray-400 hover:text-white transition-colors text-left">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
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
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <span className="text-sm">Version 2024.1</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
