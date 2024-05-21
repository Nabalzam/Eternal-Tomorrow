import { Card, Divider, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

export default function MailboxPage() {
  const [versionData, setVersionData] = useState([]);

  useEffect(() => {
    async function fetchVersion() {
      try {
        const { data, error } = await supabase.from("version").select("*");

        if (error) {
          console.error(error);
        }

        for (const version of data) {
          const { data: resData } = await supabase.storage
            .from("gambar/version")
            .getPublicUrl(version.image);

          version.image_url = resData.publicUrl;
        }

        setVersionData(data);
      } catch (error) {
        alert(error);
      }
    }

    fetchVersion();
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <Card className="max-w-3xl mx-auto p-8 rounded-lg bg-opacity-75">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold font-serif text-violet-900">
            Version List
          </h1>
          <div className="flex space-x-4"></div>
        </div>
        <Divider className="border-violet-400 mb-4" />
        <div className="grid grid-cols-1 gap-4 mb-10">
          {versionData.map((version) => (
            <div key={version.id} className="flex items-center pb-2 border-b-1.5">
              <div>
                <Image
                  src={version.image_url}
                  alt={version.title}
                  className="size-16 mb-2"
                />
              </div>
              <div className="ml-3 mb-3">
                <p className="text-xs text-gray-400">{version.patch}</p>
                <p className="text-sm text-gray-600">{version.title}</p>
                <p className="text-xs text-gray-400">{version.content}</p>
                
              </div>
            </div>
          ))}
        </div>
        <Divider className="border-violet-400 mt-4" />
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-600">Violet Evergarden</p>
            <p className="text-xs text-gray-400 "></p>
          </div>
          <Image src="/violetP.jpg" alt="Stamp" className="size-12" />
        </div>
      </Card>
    </div>
  );
}
