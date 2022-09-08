import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CONTACTS = 'contacts';
const tagTypes = ['contacts'];

export const contactsApi = createApi({
  reducerPath: CONTACTS,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6311b9bf19eb631f9d77a9ff.mockapi.io/',
  }),
  tagTypes: tagTypes,

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => CONTACTS,
      providesTags: tagTypes,
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: CONTACTS,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: tagTypes,
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `${CONTACTS}/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: tagTypes,
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
