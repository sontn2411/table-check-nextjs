"use client";

import React, { useEffect } from "react";
import { X, Globe, MapPin, Check } from "lucide-react";
import { useParams, useRouter, usePathname } from "next/navigation";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "location" | "language";
  onTabChange: (tab: "location" | "language") => void;
}

const LANGUAGES = [
  { id: "en", name: "English", label: "English" },
  { id: "jp", name: "日本語", label: "Japanese" },
  { id: "vi", name: "Tiếng Việt", label: "Vietnamese" },
];

const LOCATIONS = [
  { id: "jp", name: "Japan", label: "Nhật Bản" },
  { id: "sg", name: "Singapore", label: "Singapore" },
];

export function SettingsModal({
  isOpen,
  onClose,
  activeTab,
  onTabChange,
}: SettingsModalProps) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = params?.lang as string;
  const currentLoc = params?.location as string;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (type: "lang" | "location", id: string) => {
    let newPath = pathname;
    
    if (type === "lang") {
      newPath = pathname.replace(`/${currentLang}/`, `/${id}/`);
    } else {
      newPath = pathname.replace(`/${currentLoc}`, `/${id}`);
    }
    
    router.push(newPath);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-2xl border border-border animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4 sm:px-6">
          <h2 className="text-xl font-semibold text-card-foreground">Cài đặt</h2>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs Grid */}
        <div className="grid grid-cols-2 bg-muted p-1 mx-4 mt-4 rounded-xl border border-border/50">
          <button
            onClick={() => onTabChange("location")}
            className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all ${
              activeTab === "location" 
                ? "bg-background text-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <MapPin className="h-4 w-4" />
            Vị trí
          </button>
          <button
            onClick={() => onTabChange("language")}
            className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all ${
              activeTab === "language" 
                ? "bg-background text-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Globe className="h-4 w-4" />
            Ngôn ngữ
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 min-h-[300px]">
          {activeTab === "location" ? (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Chọn vị trí của bạn</p>
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => handleSelect("location", loc.id)}
                  className={`flex w-full items-center justify-between rounded-xl border p-4 transition-all hover:border-primary/50 hover:bg-accent/50 ${
                    currentLoc === loc.id 
                      ? "border-primary bg-accent ring-1 ring-primary/20" 
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full p-2 ${currentLoc === loc.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{loc.name}</p>
                      <p className="text-sm text-muted-foreground">{loc.label}</p>
                    </div>
                  </div>
                  {currentLoc === loc.id && <Check className="h-5 w-5 text-primary" />}
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Chọn ngôn ngữ hiển thị</p>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => handleSelect("lang", lang.id)}
                  className={`flex w-full items-center justify-between rounded-xl border p-4 transition-all hover:border-primary/50 hover:bg-accent/50 ${
                    currentLang === lang.id 
                      ? "border-primary bg-accent ring-1 ring-primary/20" 
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full p-2 ${currentLang === lang.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      <Globe className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{lang.name}</p>
                      <p className="text-sm text-muted-foreground">{lang.label}</p>
                    </div>
                  </div>
                  {currentLang === lang.id && <Check className="h-5 w-5 text-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-muted border-t border-border p-4 text-center">
          <p className="text-xs text-muted-foreground font-medium">
            Cài đặt của bạn sẽ được lưu tự động và trang web sẽ tải lại.
          </p>
        </div>
      </div>

    </div>
  );
}
