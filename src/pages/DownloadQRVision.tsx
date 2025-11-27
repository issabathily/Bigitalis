import React from 'react';
import DownloadForm from '../components/DownloadForm';
import logiciel from '/src/assets/logiciel/QR Vision Setup 0.0.0.exe';

export default function DownloadQRVision() {
  const handleClose = () => {
    // Sur une page dédiée, on peut simplement rediriger vers l'accueil
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 dark:bg-dark-950 pt-32 pb-16 px-4">
      <DownloadForm
        softwareName="QR Vision"
        softwareVersion="1.0.0"
        downloadUrl={logiciel}
        onClose={handleClose}
      />
    </div>
  );
}
