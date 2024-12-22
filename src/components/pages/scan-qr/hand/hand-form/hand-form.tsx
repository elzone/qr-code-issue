import { IonIcon, IonInput, IonText, useIonRouter } from '@ionic/react';
import { CurrencySymbol } from '@/components/common/amount/currency-symbol/currency-symbol';
import { ChecksHowToFindInfo } from '@/components/pages/checks/checks-how-to-find-info/checks-how-to-find-info';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  DatePicker,
  DatePickerOptions,
} from '@capacitor-community/date-picker';
import { handleScanResult } from '@/components/pages/scan-qr/utils/handleScanResult';
import { useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const dateTimeBaseOptions: DatePickerOptions = {
  locale: 'ru_RU',
  doneText: 'Готово',
  cancelText: 'Отменить',
  ios: {
    style: 'wheels',
    titleFontColor: 'transparent',
  },
};

const formSchema = z.object({
  date: z.string(),
  time: z.string(),
  sum: z.string().min(1, 'Обязательное поле'),
  fn: z
    .string()
    .min(1, 'Обязательное поле')
    .refine((val) => !isNaN(Number(val)), {
      message: 'Должны быть только цифры',
    }),
  fd: z
    .string()
    .min(1, 'Обязательное поле')
    .refine((val) => !isNaN(Number(val)), {
      message: 'Должны быть только цифры',
    }),
  fp: z
    .string()
    .min(1, 'Обязательное поле')
    .refine((val) => !isNaN(Number(val)), {
      message: 'Должны быть только цифры',
    }),
});

const HandForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useIonRouter();
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const currentTimezone = dayjs.tz.guess();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    defaultValues: {
      date: new Date().toLocaleString('ru-RU').split(`, `)[0],
      time: new Date()
        .toLocaleString('ru-RU')
        .split(', ')[1]
        .split(':')
        .slice(0, 2)
        .join(':'),
      sum: '',
      fn: '',
      fd: '',
      fp: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const convertedDate = `${values.date.split('.').reverse().join('')}T${values.time.replaceAll(':', '')}`;
    const checkData = `t=${convertedDate}&s=${values.sum.toString().replace(`,`, `.`)}&fn=${values.fn}&fp=${values.fp}&i=${values.fd}`;

    const sendForm = async () => {
      return await handleScanResult(checkData, true);
    };

    sendForm()
      .then((result) => {
        router.push(`/tabs/scan-qr/scan-result/${result}`);
      })
      .catch((error) =>
        document.dispatchEvent(
          new CustomEvent(`AppErrorMessage`, {
            detail: { message: error.message },
          })
        )
      )
      .finally(() => setIsLoading(false));

    form.reset();
  };

  const openDatePicker = () => {
    const options: DatePickerOptions = {
      ...dateTimeBaseOptions,
      mode: 'date',
      date: form.getValues('date'),
      format: `dd.MM.yyyy`,
      timezone: currentTimezone,
    };
    DatePicker.present(options)
      .then((result) => {
        if (result && result.value) {
          form.setValue('date', result.value);
        }
      })
      .catch((error) => console.log(error));
  };

  const openTimePicker = () => {
    const options: DatePickerOptions = {
      ...dateTimeBaseOptions,
      mode: 'time',
      is24h: true,
      date: form.getValues(`time`),
      format: `HH:mm`,
      timezone: currentTimezone,
    };

    DatePicker.present(options)
      .then((result) => {
        if (result && result.value) {
          console.log(result.value);
          form.setValue('time', result.value);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={'h-full flex flex-col justify-between space-y-4'}
      >
        <div className={`space-y-4`}>
          <FormField
            control={form.control}
            name={'date'}
            render={({ field }) => {
              return (
                <FormItem className={`flex items-center justify-between`}>
                  <FormLabel className={`text-base`}>Дата</FormLabel>
                  <FormControl>
                    <>
                      <Button
                        type={`button`}
                        className={`w-40 bg-gray-200 justify-between text-black text-base font-normal`}
                        onClick={openDatePicker}
                      >
                        {field.value}
                        <IonIcon src={`/assets/app-icons/arrow-right.svg`} />
                      </Button>
                    </>
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name={'time'}
            render={({ field }) => (
              <FormItem className={`flex items-center justify-between`}>
                <FormLabel className={`text-base`}>Время</FormLabel>
                <FormControl>
                  <Button
                    type={`button`}
                    className={`w-40 bg-gray-200 justify-between text-black text-base font-normal`}
                    onClick={openTimePicker}
                  >
                    {field.value}
                    <IonIcon src={`/assets/app-icons/arrow-right.svg`} />
                  </Button>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={'sum'}
            render={({ field }) => (
              <FormItem className={`flex items-center justify-between`}>
                <label className={`text-base`}>Сумма</label>
                <div className={`inline-flex flex-col space-y-2`}>
                  <FormControl>
                    <IonInput
                      className={'custom w-40'}
                      placeholder="0"
                      type={`text`}
                      inputmode={`decimal`}
                      onIonInput={(e: CustomEvent) =>
                        form.setValue('sum', e.detail.value)
                      }
                      {...field}
                    >
                      <IonText slot={`end`}>
                        <CurrencySymbol />
                      </IonText>
                    </IonInput>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={'fn'}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <IonInput
                    className={'custom'}
                    placeholder={'ФН'}
                    type={`number`}
                    inputmode={`numeric`}
                    onIonChange={(e: CustomEvent) =>
                      form.setValue('fn', e.detail.value)
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={'fd'}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <IonInput
                    className={'custom'}
                    placeholder={'ФД'}
                    type={`number`}
                    inputmode={`numeric`}
                    onIonChange={(e: CustomEvent) =>
                      form.setValue('fd', e.detail.value)
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={'fp'}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <IonInput
                    className={'custom'}
                    placeholder={'ФП или ФПД'}
                    type={`number`}
                    inputmode={`numeric`}
                    onIonChange={(e: CustomEvent) =>
                      form.setValue('fp', e.detail.value)
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ChecksHowToFindInfo />
        </div>
        <Button
          type={`submit`}
          disabled={isLoading}
          isLoading={isLoading}
        >
          Отправить
        </Button>
      </form>
    </Form>
  );
};

export { HandForm };
