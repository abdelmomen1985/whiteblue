"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { directusAssetUrl } from "@/lib/app-utils";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HomeDialogProps {
  mediaId: string;
  mediaType: "image" | "video";
}

export default function HomeDialog({ mediaId, mediaType }: HomeDialogProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("popupShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("popupShown", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const assetUrl = directusAssetUrl(mediaId);

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setIsVisible(false);
        }
      }}
      defaultOpen={isVisible}
      open={isVisible}
    >
      <DialogContent className="p-0 bg-transparent">
        <div>
          {mediaType === "image" ? (
            <Image
              src={assetUrl}
              alt="banner"
              width={1438}
              height={1080}
              className="rounded-3xl w-full"
            />
          ) : (
            <video
              src={assetUrl}
              controls
              className="rounded-3xl w-full"
              width={1438}
              height={1080}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
