import { useState } from 'react';
import DownloadModal from './DownloadModal';

interface DownloadButtonProps {
  softwareName: string;
  softwareVersion: string;
  downloadUrl: string;
  className?: string;
  children: React.ReactNode;
}

export default function DownloadButton({
  softwareName,
  softwareVersion,
  downloadUrl,
  className = '',
  children
}: DownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${className}`}
      >
        {children}
      </button>

      <DownloadModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        softwareName={softwareName}
        softwareVersion={softwareVersion}
        downloadUrl={downloadUrl}
      />
    </>
  );
}
