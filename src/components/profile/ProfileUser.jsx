import React from "react";
import { Input, NativeSelect, Group, Button } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";

const ProfileCostumer = () => {
  return (
    <div>
      <img src="https://i.ibb.co/CmWhGLX/pexels-pixabay-39866.jpg" alt="" className="w-[250px] mx-auto rounded-full" />

      <div className="my-4 flex flex-col gap-4">
        <Input id="nama" placeholder="" defaultValue="Jhon" />
        <Input id="email" type="email" placeholder="" defaultValue="jhon@mail.com" />
        <NativeSelect
          placeholder="Pilih Jenis Kelamin"
          data={[
            { value: "laki-laki", label: "Laki-Laki" },
            { value: "perempuan", label: "Perempuan" },
          ]}
          rightSection={<ChevronDown size={14} />}
          rightSectionWidth={40}
        />
        <Input id="umur" type="number" placeholder="" defaultValue={19} />
        <Group position="left">
          <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700">Simpan</Button>
        </Group>
      </div>
    </div>
  );
};

const ProfileDriver = () => {
  return (
    <div>
      <img src="https://i.ibb.co/CmWhGLX/pexels-pixabay-39866.jpg" alt="" className="w-[250px] mx-auto rounded-full" />

      <div className="my-4 flex flex-col gap-4">
        <Input id="nama" placeholder="" defaultValue="Jhon" disabled />
        <Input id="email" type="email" placeholder="" defaultValue="jhon@mail.com" />
        <NativeSelect
          placeholder="Pilih Jenis Kelamin"
          data={[
            { value: "laki-laki", label: "Laki-Laki" },
            { value: "perempuan", label: "Perempuan" },
          ]}
          rightSection={<ChevronDown size={14} />}
          rightSectionWidth={40}
        />
        <Input id="umur" type="number" placeholder="" defaultValue={19} />
        <Group position="left">
          <Button className="bg-amber-500 hover:bg-amber-400 text-stone-700">Simpan</Button>
        </Group>
      </div>
    </div>
  );
};

export { ProfileCostumer, ProfileDriver };